class OrdersController < ApplicationController

  before_action :set_order, only: [:destroy, :show]

  def index
    set_orders()
    set_outlet_produces()
    create_order_summary()
    create_branch_items()

    responseObj = {
      orders: @orders,
      outlet_produces: @produce_list_by_outlet,
      order_summary: @order_summary
    }

    respond_to do |format|
        format.html { render :index }
        format.json { render json: @orders }
    end
  end

  # def show
  #   respond_to do |format|
  #       format.html { render :show }
  #       format.json { render json: @order }
  #   end
  # end

  # def edit
  #   @order = Order.find(params[:id])
  #   @user_orders = Order.where(user_id: current_user.id, purchase_date: Date.today)
  #   @outlet_produces = OutletProduce.where(date: Date.today)
  # end
  #
  # def update
  #   @order = Order.where(user_id: current_user.id, purchase_date: Date.today).take
  #   @order.quantity_bought = params[:quantity_bought]
  #   @order.save
  #   @outlet_produce = OutletProduce.find(@order.outlet_produce_id)
  #   @outlet_produce.quantity -= params[:order][:quantity_bought].to_i
  #   @outlet_produce.save
  #   @update_quantity = {
  #     order: @order,
  #     outlet_produce: @outlet_produce
  #   }
  #   respond_to do |format|
  #       format.html { render :show }
  #       format.json { render json: @update_quantity }
  #   end
  # end

  def new
    @order = Order.new
    set_orders()
    set_outlet_produces()
    create_order_summary()
    create_branch_items()

    responseObj = {
      orders: @orders,
      outlet_produces: @produce_list_by_outlet,
      order_summary: @order_summary
    }

    respond_to do |format|
        format.html { render :new }
        format.json { render json: responseObj }
    end
  end

  def create

    if Order.exists?(outlet_produce_id: params[:order][:outlet_produce_id].to_i, user_id: current_user.id)
      p '------------------------------------'
      p 'order is found'
      p '------------------------------------'
      @order = Order.find_by(outlet_produce_id: params[:order][:outlet_produce_id].to_i, user_id: current_user.id)
      @order.quantity_bought += params[:order][:quantity_bought].to_i
    else
      p '------------------------------------'
      p 'order not found, creating new order'
      p '------------------------------------'
      @order = Order.new(order_params)
    end

    @outlet_produce_update = OutletProduce.find(params[:order][:outlet_produce_id].to_i)
    @outlet_produce_update.quantity -= params[:order][:quantity_bought].to_i

    if @outlet_produce_update.save
      p '------------------------------------'
      p 'OP save successful, saving order'
      p '------------------------------------'
      respond_to do |format|
        if @order.save
          p '------------------------------------'
          p 'order is saved'
          p '------------------------------------'
          responseObj = { order: @order, quantity_ordered: params[:order][:quantity_bought] }
          format.html { redirect_to @order, notice: 'Order was successfully created.' }
          format.json { render json: responseObj }
        else
          responseObj = { order: 'No order created', errors: @order.errors, quantity_ordered: 0}
          format.html { render :new }
          format.json { render json: responseObj, status: :unprocessable_entity }
        end
      end
    else
      p '------------------------------------'
      p 'OP save failed, thus order failed to save as well'
      p @outlet_produce_update.errors.inspect
      p '------------------------------------'
      respond_to do |format|
          format.html { render :new }
          format.json { render json: @outlet_produce_update.errors, status: :unprocessable_entity }
      end
    end

  end

  def destroy

    @outlet_produce = OutletProduce.find(@order.outlet_produce_id)
    @outlet_produce.quantity += @order.quantity_bought
    @outlet_produce.save
    deleted_order = @order
    @order.destroy

    set_orders()
    set_outlet_produces()
    create_branch_items()
    create_order_summary()

    responseObj = {
      orders: @orders,
      outlet_produces: @produce_list_by_outlet,
      order_summary: @order_summary
    }

    respond_to do |format|
        format.html { redirect_to orders_path }
        format.json { render json: responseObj }
    end
  end

  def delete_items
    #code
  end

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:outlet_produce_id, :user_id, :quantity_bought, :purchase_date, :cost)
  end

  def set_orders
    @orders = Order.where(user_id: current_user.id, purchase_date: Date.today).includes(:outlet_produce).as_json(include: { outlet_produce: { only: [:id], include: {produce: { only: [:name] }, outlet: { only: [:branch, :supermarket_id, :town], include: {supermarket: { only: [:name]}} }}} }).sort_by {|k| k['outlet_produce']['produce']['name']}
  end

  def set_outlet_produces
    @outlet_produces = OutletProduce.joins(:outlet).where(date: Date.today, :outlets => { :town => current_user.town }).includes(:produce, :outlet).as_json(include: { produce: { only: [:name] }, outlet: { only: [:branch, :supermarket_id, :town], include: {supermarket: { only: [:name]}} }}).sort_by {|k| k['outlet_id']}
  end

  def create_branch_items()
    @produce_list_by_outlet = Hash.new {|h,k| h[k]=[] }

    @outlet_produces.each do |outlet_produce|
      key = outlet_produce["outlet"]["branch"]
      @produce_list_by_outlet[key] << outlet_produce
    end

    @produce_list_by_outlet.each do |branch, items|
      sorted_items = items.sort_by { |k| k['produce']['name'] }
      @produce_list_by_outlet[branch] = sorted_items
    end
  end

  def create_order_summary
    @order_summary = Hash.new(0)

    @orders.each do |order|
      key = order["outlet_produce"]["produce"]["name"]
      @order_summary[key] += order["quantity_bought"]
    end
  end

  def set_response_hash
    responseObj = {
      orders: @orders,
      outlet_produces: @produce_list_by_outlet,
      order_summary: @order_summary
    }
  end

end

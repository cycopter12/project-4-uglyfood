class OrdersController < ApplicationController

  before_action :set_order, only: [:destroy, :show]

  def index
    @orders = Order.where(user_id: current_user.id, purchase_date: Date.today)
    respond_to do |format|
        format.html { render :index }
        format.json { render json: @orders }
    end
  end

  def show
    respond_to do |format|
        format.html { render :show }
        format.json { render json: @order }
    end
  end

  def edit
    @order = Order.find(params[:id])
    @user_orders = Order.where(user_id: current_user.id, purchase_date: Date.today)
    @outlet_produces = OutletProduce.where(date: Date.today)

  end

  def update
    @order = Order.where(user_id: current_user.id, purchase_date: Date.today).take
    @order.quantity_bought = params[:quantity_bought]
    @order.save
    @outlet_produce = OutletProduce.find(@order.outlet_produce_id)
    @outlet_produce.quantity -= params[:order][:quantity_bought].to_i
    @outlet_produce.save
    @update_quantity = {
      order: @order,
      outlet_produce: @outlet_produce
    }
    respond_to do |format|
        format.html { render :show }
        format.json { render json: @update_quantity }
    end
  end

  def new
    @order = Order.new
    @outlet_produces = OutletProduce.where(date: Date.today)
  end

  def create
    @outlet_produces = OutletProduce.where(date: Date.today)
    @order = Order.new(order_params)
    @outlet_produce_update = OutletProduce.find(params[:order][:outlet_produce_id].to_i)
    @outlet_produce_update.quantity -= params[:order][:quantity_bought].to_i
    @outlet_produce_update.save
    respond_to do |format|
      if @order.save
        format.html { redirect_to @order, notice: 'Order was successfully created.' }
        format.json { render json: @order }
      else
        format.html { render :new }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @outlet_produce = OutletProduce.find(@order.outlet_produce_id)
    puts '********** BEFORE UPDATE **********************'
    puts @outlet_produce.quantity
    @outlet_produce.quantity += @order.quantity_bought
    puts '********** AFTER UPDATE **********************'
    puts @outlet_produce.quantity
    @outlet_produce.save
    deleted_order = @order
    @order.destroy
    @orders = Order.all
    @destroy_quantity = {
      orders_left: @orders,
      outlet_produce: @outlet_produce,
      deleted_order: deleted_order
    }
    respond_to do |format|
        format.html { render json: @destroy_quantity }
        format.json { render json: @destroy_quantity }
    end
  end

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:outlet_produce_id, :user_id, :quantity_bought, :purchase_date, :cost)
  end
end

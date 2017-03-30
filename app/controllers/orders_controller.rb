class OrdersController < ApplicationController

  def index
    @orders = Order.where(user_id: current_user.id)
  end

  def show
  end

  def edit
    @order = Order.find(params[:id])
    @outlet_produces = OutletProduce.where(date: Date.today)
  end

  def update
    @order = Order.where(user_id: current_user.id, purchase_date: Date.today).take
    @order.quantity_bought = params[:quantity_bought]
    @order.save
    @outlet_produce = OutletProduce.find(@order.outlet_produce_id)
    puts "the quantity is #{params[:quantity_bought]}"
    @outlet_produce.quantity -= params[:quantity_bought]
    @outlet_produce.save
  end

  def new
    @order = Order.new
    @outlet_produces = OutletProduce.where(date: Date.today)
  end

  def create
    @outlet_produces = OutletProduce.where(date: Date.today)
    @order = Order.new(order_params)
    respond_to do |format|
      if @order.save
        format.html { redirect_to @order, notice: 'Order was successfully created.' }
        format.json { render :show, status: :created, location: @order }
      else
        format.html { render :new }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy

  end

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:outlet_produce_id, :user_id, :quantity_bought, :purchase_date, :cost)
  end
end

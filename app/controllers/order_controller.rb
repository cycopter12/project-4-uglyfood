class OrderController < ApplicationController

  def index
    @orders = Order.where(user_id: current_user.id)
  end

  def show
  end

  def edit
  end

  def update
    @order = Order.where(user_id: current_user.id, purchase_date: Date.now).take
    @order.quantity_bought = params[:quantity_bought]
    @order.save
    @outlet_produce = OutletProduce.find(@order.outlet_produce_id)
    @outlet_produce.quantity -= params[:quantity_bought]
    @outlet_produce.save
  end

  def new
  end

  def create
  end

  def destroy
    
  end

  private

  def set_order
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:property).permit(:outlet_produce_id, :user_id, :quantity_bought, :purchase_date, :cost)
  end
end

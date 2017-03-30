class OrdersController < ApplicationController
  before_action :set_order, only: [:destroy]

  def index
    @orders = Order.where(user_id: current_user.id, purchase_date: Date.today)
    respond_to do |format|
        format.json { render json: @orders }
    end
  end

  def show
  end

  def edit
  end

  def update
    @order = Order.where(user_id: current_user.id, purchase_date: Date.today).take
    @order.quantity_bought = params[:quantity_bought]
    @order.save
    @outlet_produce = OutletProduce.find(@order.outlet_produce_id)
    @outlet_produce.quantity -= params[:quantity_bought]
    @outlet_produce.save
    @update_quantity = {
      order: @order,
      outlet_produce: @outlet_produce
    }
    respond_to do |format|
        format.json { render json: @update_quantity }
    end
  end

  def new
    @order = Order.new
    @outlet_produces = OutletProduce.find(date: Date.today)
  end

  def create
    @order = Order.new(order_params)
  end

  def destroy
    @outlet_produce = OutletProduce.find(@order.outlet_produce_id)
    @outlet_produce.quantity += params[:quantity_bought]
    @outlet_produce.save
    @order.destroy
    @orders = Order.all
    @destroy_quantity = {
      orders_left: @orders,
      outlet_produce: @outlet_produce
    }
    respond_to do |format|
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

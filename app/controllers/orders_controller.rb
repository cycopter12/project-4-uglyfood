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
    @order = Order.find(params[:id])
    @outlet_produces = OutletProduce.where(date: Date.today)

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

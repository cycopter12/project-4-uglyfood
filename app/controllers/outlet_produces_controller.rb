class OutletProducesController < ApplicationController
  before_action :set_outlet_produce, only: [:show, :update, :sell]

  def index
    @outlet_produces = OutletProduce.where(date: Date.today)
    # if updating the site the day after the collection, need to change the date to +1
  end

  def show

  end

  def new
    if OutletProduce.exists?(outlet_id: current_user.outlet_id, produce_id: params[:produce_id], date: Date.today)
      @outletproduce = OutletProduce.where(outlet_id: current_user.outlet_id, produce_id: params[:produce_id], date: Date.today).take
      # .where returns an array of elements that meets the criteria
      # .take returns the first element of the array
    else
      @outletproduce = OutletProduce.new
    end
  end

  def update
    if OutletProduce.exists?(outlet_id: current_user.outlet_id, produce_id: params[:produce_id], date: Date.today)
      @outletproduce = OutletProduce.where(outlet_id: current_user.outlet_id, produce_id: params[:produce_id], date: Date.today).take
      @outletproduce.quantity = params[:quantity]
      @outletproduce.save
    else
      @outletproduce = OutletProduce.new(outlet_produce_params)
      @outletproduce.save
    end
  end

  def sell
    if OutletProduce.exists?(outlet_id: current_user.outlet_id, produce_id: params[:produce_id], date: Date.today)
      @outletproduce = OutletProduce.where(outlet_id: current_user.outlet_id, produce_id: params[:produce_id], date: Date.today).take
      @outletproduce.quantity -= params[:quantity]
      @outletproduce.save
    end
  end

  private

  def set_outlet_produce
    @outlet_produce = OutletProduce.find(params[:id])
  end

  def outlet_produce_params
    params.require(:property).permit(:outlet_id, :produce_id, :quantity, :date)
  end
end

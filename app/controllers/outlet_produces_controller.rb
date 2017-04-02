class OutletProducesController < ApplicationController
  before_action :set_outlet_produce, only: [:show, :update, :sell]

  def index
    @outlet_produces = OutletProduce.where(date: Date.today).includes(:produce, :outlet).as_json(include: {produce: {only: [:name]}, outlet: {only: [:branch, :name]}})
    # puts @outlet_produces
    # if updating the site the day after the collection, need to change the date to +1
    respond_to do |format|
        format.html { render :index }
        format.json { render json: @outlet_produces }
    end
  end

  def show
    @outlet_produce = OutletProduce.find_by(outlet_id: params[:outlet_id])
    respond_to do |format|
        format.html { render :show }
        format.json { render json: @outlet_produce }
    end
  end

  def new
    @outlet_produce =OutletProduce.new
    # @outlet_produces = OutletProduce.where(date: Date.today)
    # if OutletProduce.exists?(outlet_id: current_user.outlet_id, produce_id: params[:produce_id], date: Date.today)
    #   @outletproduce = OutletProduce.where(outlet_id: current_user.outlet_id, produce_id: params[:produce_id], date: Date.today).take
    #   # .where returns an array of elements that meets the criteria
    #   # .take returns the first element of the array
    # else
    #   @outletproduce = OutletProduce.new
    # end
    # respond_to do |format|
    #   if @outletproduce.save
    #     format.json { render :new }
    #     format.json { render json: @outletproduce }
    #   else
    #     format.json {render json: @outletproduce.errors, status: :unprocessable_entity}
    #   end
    # end
  end
  def create
    @outletproduce = OutletProduce.new(outlet_produce_params)
    respond_to do |format|
      if @outletproduce.save
        format.html { redirect_to @outletproduce, notice: 'Produce was successfully created.' }
        format.json { render json: @outletproduce }
      else
        format.html { render :new }
        format.json { render json: @outletproduce.errors, status: :unprocessable_entity }
    end
  end

  def update
    if OutletProduce.exists?(outlet_id: current_user.outlet_id, produce_id: params[:produce_id], date: Date.today)
      @outletproduce = OutletProduce.where(outlet_id: current_user.outlet_id, produce_id: params[:produce_id], date: Date.today).take
      @outletproduce.quantity = params[:quantity]
    else
      @outletproduce = OutletProduce.new(outlet_produce_params)
    end
    respond_to do |format|
      if @outletproduce.save
        format.json { render json: @outletproduce }
      else
        format.json {render json: @outletproduce.errors, status: :unprocessable_entity}
      end
    end
  end

  # def sell
  #   if OutletProduce.exists?(outlet_id: current_user.outlet_id, produce_id: params[:produce_id], date: Date.today)
  #     @outletproduce = OutletProduce.where(outlet_id: current_user.outlet_id, produce_id: params[:produce_id], date: Date.today).take
  #     @outletproduce.quantity -= params[:quantity]
  #     respond_to do |format|
  #       if @outletproduce.save
  #         format.json { render json: @outletproduce }
  #       else
  #         format.json {render json: @outletproduce.errors, status: :unprocessable_entity}
  #       end
  #     end
  #   end
  end

  private

  def set_outlet_produce
    @outlet_produce = OutletProduce.find(params[:id])
  end

  def outlet_produce_params
    params.require(:outlet_produce).permit(:outlet_id, :produce_id, :quantity, :date)
  end
end

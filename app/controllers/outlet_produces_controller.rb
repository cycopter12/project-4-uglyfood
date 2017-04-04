class OutletProducesController < ApplicationController
  before_action :set_outlet_produce, only: [:show, :update, :sell]

  def index
    @outlet_produce = OutletProduce.find_by(outlet_id: current_user.outlet_id)
    @outlet = Outlet.find_by(id: current_user.outlet_id)
    @supermarket = Supermarket.find_by(id: @outlet.supermarket_id.to_i)
    p '**********************************************************************'
    p @outlet
    p @outlet.branch
    p @supermarket
    if current_user.is_admin == true
      @outlet_produces = OutletProduce.where(date: Date.today).order("created_at").includes(:produce, :outlet).as_json(include: {produce: {only: [:name]}, outlet: {only: [:branch, :name]}})
    else
      @outlet_produces = OutletProduce.where(date: Date.today, outlet_id: current_user.outlet_id).order("created_at").includes(:produce, :outlet).as_json(include: {produce: {only: [:name]}, outlet: {only: [:branch, :name]}})
      # puts @outlet_produces
      # if updating the site the day after the collection, need to change the date to +1
    end
    respond_to do |format|
        format.html { render :index }
        format.json { render json: @outlet_produces }
    end
  end

  def show
    # @outlet_produce = OutletProduce.find_by(outlet_id: params[:outlet_id])
    # respond_to do |format|
    #     format.html { render :show }
    #     format.json { render json: @outlet_produce }
    # end
  end

  def new
    @outlet_produce = OutletProduce.new
    # @outlet_produces = OutletProduce.where(date: Date.today).includes(:produce, :outlet).as_json(include: {produce: {only: [:name]}, outlet: {only: [:branch, :name]}})
  end

  def create
    # puts 'hello world!'
    # puts '********************************************************'
    # puts current_user.outlet_id
    # puts params[:outlet_produce][:produce_id]
    # puts Date.today
    if OutletProduce.exists?(outlet_id: current_user.outlet_id, produce_id: params[:outlet_produce][:produce_id], date: Date.today)
      @outletproduce = OutletProduce.where(outlet_id: current_user.outlet_id, produce_id: params[:outlet_produce][:produce_id], date: Date.today).take
      # puts '**************************************************************'
      # puts @outletproduce
      # puts @outletproduce.class
      # puts @outletproduce.quantity
      @outletproduce.quantity += params[:outlet_produce][:quantity].to_i
      # puts '*************************************'
      # puts params[:outlet_produce][:quantity]
      # puts '*************************************'
      # puts @outletproduce.quantity
    else
      # puts '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
      @outletproduce = OutletProduce.new(outlet_produce_params)
    end
    respond_to do |format|
      if @outletproduce.save
        # format.html { redirect_to '/outlet_produces', notice: 'Produce was successfully created.' }
        @outlet_produces = OutletProduce.where(date: Date.today, outlet_id: current_user.outlet_id).order("created_at").includes(:produce, :outlet).as_json(include: {produce: {only: [:name]}, outlet: {only: [:branch, :name]}})
        format.json { render json: @outlet_produces }
      else
        format.html { render :new }
        format.json { render json: @outletproduce.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    puts '*****************************************************************'
    puts outlet_produce_params
    puts params[:outlet_produce][:quantity].class
    puts params[:id]
    puts '*****************************************************************'
    @outletproduce = OutletProduce.find_by(id: params[:id])
    puts @outletproduce.quantity
    @outletproduce.quantity = params[:outlet_produce][:quantity].to_i
    puts '*****************************************************************'
    puts @outletproduce.quantity
    respond_to do |format|
      if @outletproduce.save
        @outlet_produces = OutletProduce.where(date: Date.today, outlet_id: current_user.outlet_id).order("created_at").includes(:produce, :outlet).as_json(include: {produce: {only: [:name]}, outlet: {only: [:branch, :name]}})
        format.json { render json: @outlet_produces }
      end
    end
  end

  def destroy
    # puts params[:id]
    @outlet_produce = OutletProduce.find_by(outlet_id: current_user.outlet_id, date: Date.today, id: params[:id])
    # puts @outlet_produce.quantity
    @outlet_produce.destroy
    respond_to do |format|
      # format.html { render './users/registrations/edit', locals:{ajax_render:'listings'}, notice: 'Property was successfully de-listed.' }
      format.json { head :no_content }
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
  private

  def set_outlet_produce
    @outlet_produce = OutletProduce.find(params[:id])
  end

  def outlet_produce_params
    params.require(:outlet_produce).permit(:outlet_id, :produce_id, :quantity, :date)
  end
end

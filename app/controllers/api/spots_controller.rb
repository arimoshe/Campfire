class Api::SpotsController < ApplicationController
  def create

  end

  def show
    @spot = Spot.find_by(id: params[:id])
    if @spot
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def index

  end


end

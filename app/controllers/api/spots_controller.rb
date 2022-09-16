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
    @spots = Spot.all.includes(photos_attachments: :blob)
    if @spots
      render :index
    else
      render json: @spots.errors.full_messages, status: 422
    end
  end


end

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
    if params[:page]
      @spots = Spot.all.limit(10).offset((params[:page].to_i - 1) * 10).order(:id).includes(photos_attachments: :blob)
      @count = Spot.all.count
      if @spots
        render :index
      else
        render json: @spots.errors.full_messages, status: 422
      end

    else
      @spots = Spot.all.limit(10).order(:id).includes(photos_attachments: :blob)
      @count = Spot.all.count
      if @spots
        render :index
      else
        render json: @spots.errors.full_messages, status: 422
      end
    end

    
  end



  private 

  

end

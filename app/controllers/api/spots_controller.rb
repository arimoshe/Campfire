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
    @spots = Spot.all.where(["capacity >= ?",  params[:adults].to_i + params[:children].to_i] )
    if params[:lat]
      @spots = @spots.where(["(((latitude - ?) between -5 and 5) AND ((longitude - ?) between -5 and 5))", params[:lat], params[:lng]])
    end
    @count = @spots.count
    if params[:page]
      @spots = @spots.limit(10).offset((params[:page].to_i - 1) * 10).order(:id).includes(photos_attachments: :blob)
    else
      @spots = @spots.limit(10).order(:id).includes(photos_attachments: :blob)
    end
    if @spots
      render :index
    else
      render json: @spots.errors.full_messages, status: 422
    end
  end



  private 

  

end

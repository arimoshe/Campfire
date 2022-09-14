class Api::BookingsController < ApplicationController

  before_action :require_logged_in


  def create
    @booking = Booking.new(booking_params)
    if @booking.save 
      
      render :show
    else 
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find_by(id: params[:id])
    if @booking.destroy 
      render :show 
    else
       render json: @booking.errors.full_messages, status: 422
    end
  end

  def update

  
  end

  def index
    @bookings = current_user.bookings

  end
end


private 

def booking_params 
   params.require(:booking).permit(
    :spot_id,
    :customer_id,
    :owner_id, 
    :spot_id, 
    :start_date,
    :end_date,
    :adults,
    :children,
    :price
    )
end


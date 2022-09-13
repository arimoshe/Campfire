class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
    if @booking.save 
      
      render :show
    else 
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def show
  end

  def index
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


json.bookings do
    @bookings.each do |booking| 
        json.set! booking.id do
            json.extract! booking, :id, :customer_id, :owner_id, :start_date, :end_date, :adults, :children, :price 
            json.spot_name Spot.find_by(id: booking.spot_id).name
            json.spot_image_url Spot.find_by(id: booking.spot_id).photos[0].url
            json.spot_city Spot.find_by(id: booking.spot_id).city
            json.spot_state Spot.find_by(id: booking.spot_id).state
            json.spot_capacity Spot.find_by(id: booking.spot_id).capacity
            json.spot_id booking.spot_id
        end
        # json.reviews 
    end
end
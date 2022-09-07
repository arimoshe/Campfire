json.spot do 
  json.set! @spot.id do
        json.extract! @spot, 
        :name, 
        :address1, 
        :address2, 
        :city, 
        :state, 
        :zipcode, 
        :longitude, 
        :latitude, 
        :price, 
        :acres, 
        :capacity, 
        :about, 
        :lodgings, 
        :rvs, 
        :tents, 
        :high_demand, 
        :owner_id

        json.photo_urls @spot.photos.map{ |file| url_for(file) }
      end
end
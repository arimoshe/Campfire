json.extract! @spot, 
        :id,
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


        json.reviews Spot.joins(:reviews).select("count(reviews.id)").group("spots.id").first
        json.recommendedReviews Spot.joins(:reviews).select("count(reviews.id)").where("recommended = true").group("spots.id").first
        json.photo_urls @spot.photos.map{ |file| file.url 
    }
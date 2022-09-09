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

        json.activities Spot.joins(:tags).select("tags.name").where("tag_type = 'Activities'")
        json.natural_features Spot.joins(:tags).select("tags.name").where("tag_type = 'Natural features'")
        json.reviews Spot.joins(:reviews).select("count(reviews.id)").group("spots.id").first
        json.recommendedReviews Spot.joins(:reviews).select("count(reviews.id)").where("recommended = true").group("spots.id").first
        json.photo_urls @spot.photos.map{ |file| file.url 
    }
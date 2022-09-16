
json.current_spot do
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
        json.bookings Spot.joins(:bookings).select("bookings.start_date, bookings.end_date")
        json.total_reviews @spot.reviews.count
        # json.total_reviews Spot.joins(:reviews).select("count(reviews.id)").group("spots.id").first
        json.recommended_reviews @spot.reviews.where(reviews: {recommended: true}).count
        # json.recommended_reviews Spot.joins(:reviews).select("count(reviews.id)").where("recommended = true").group("spots.id").first
        json.photo_urls @spot.photos.map{ |file| file.url }


    json.reviews do
        @spot.reviews.limit(7).each do |review| 
            json.set! review.id do
                json.extract! review, :id, :recommended, :body, :created_at
                json.author_first_name User.find_by(id: review.author_id).first_name
                json.author_last_name User.find_by(id: review.author_id).last_name
                
            end
            
        end
    end
end
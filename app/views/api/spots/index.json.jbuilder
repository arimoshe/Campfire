
@spots.each do |spot| 
    json.set! spot.id do
        json.extract! spot,  :id,:name, :city, :state, :longitude, :latitude, :price, :acres, :capacity, :lodgings, :rvs, :tents, :high_demand
        json.total_reviews Spot.joins(:reviews).select("count(reviews.id)").group("spots.id").first
        json.recommended_reviews Spot.joins(:reviews).select("count(reviews.id)").where("recommended = true").group("spots.id").first
        json.photo_urls spot.photos[0].url
        json.results_count @count

    end 
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#   
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

ApplicationRecord.transaction do 
#   puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Spot.destroy_all
  User.destroy_all

#   puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('spots')

  puts "Creating users..."
  # Create one user with an easy to remember email and password:
  User.create!(
    email: 'ari@ari.com', 
    password: 'password',
    first_name: 'Ari',
    last_name: 'Moshe'

  )

  User.create!(
    email: 'demo@demo.com', 
    password: '123456',
    first_name: "Demo",
    last_name: "User"
  )

spot = Spot.create!(
    name: 'Yosemite',
    address1: '6107 Big Oak Flat Rd',
    city: 'Groveland',
    state: 'California',
    zipcode: 95321,
    longitude: 37.80009018741985,
    latitude: -119.87529410959473,
    price: 100,
    acres: 15,
    about: 'This is a park called Yosemite!',
    capacity: 5 ,
    lodgings: 3,
    rvs: 0,
    tents: 2,
    high_demand: true,
    owner_id: User.first.id    
)




spot.photos.attach(
    io: URI.open('https://campfire-aa-dev.s3.us-west-1.amazonaws.com/50.jpg'), 
    filename:'50.jpg'
    )

# spot.photos.attach(
#     io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/CampfireImages/11.jpg'), 
#     filename:'11.jpg'
#     )

# spot.photos.attach(
# io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/CampfireImages/12.jpg'), 
# filename:'12.jpg'
# )


Review.create!(
    spot_id: Spot.find_by(name: "Yosemite"),
    author_id: User.first,
    recommended: true,
    body: "What an awesome place!"

)


# 5.times do 
#     Spot.create!({
#     name: 'Yosemite',
#     address1: '6107 Big Oak Flat Rd',
#     city: 'Groveland',
#     state: 'CA',
#     zipcode: 95321,
#     longitude: 37.80009018741985,
#     latitude: -119.87529410959473,
#     price: 100,
#     acres: 15,
#     about: 'This is a park called Yosemite!',
#     capacity: 5 ,
#     lodgings: 3,
#     rvs: 0,
#     tents: 2,
#     high_demand: true,
#     owner_id: User.first.id 
#     })
# end




  # More users
#   10.times do 
#     User.create!({
#       email: Faker::Internet.unique.email,
#       password: 'password'
#     }) 
#   end

  puts "Done!"
end
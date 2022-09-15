# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#   
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Spot.destroy_all
  User.destroy_all
  Booking.destroy_all
  Review.destroy_all
  Tag.destroy_all
  SpotTag.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('spots')
  ApplicationRecord.connection.reset_pk_sequence!('reviews')
  ApplicationRecord.connection.reset_pk_sequence!('bookings')
  ApplicationRecord.connection.reset_pk_sequence!('tags')
  ApplicationRecord.connection.reset_pk_sequence!('spot_tags')

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
    latitude: 37.80009018741985,
    longitude: -119.87529410959473,
    price: 100,
    acres: 15,
    about: 'Yosemite National Park is in California\'s Sierra Nevada mountains. It\'s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints of the photographer\'s renowned black-and-white landscapes of the area.',
    capacity: 5 ,
    lodgings: 3,
    rvs: 0,
    tents: 2,
    high_demand: true,
    owner_id: User.first.id    
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
    spot_id: Spot.find_by(name: "Yosemite").id,
    author_id: User.first.id,
    recommended: true,
    body: "What an awesome place!"

)

Review.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    author_id: User.first.id,
    recommended: true,
    body: "Had a great time!"
)

Review.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    author_id: User.first.id,
    recommended: false,
    body: "I was attacked by a bear!"

)

Tag.create!(
    name: 'Biking',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Boating',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Fishing',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Hiking',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Paddling',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Surfing',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Swimming',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Wildlife watching',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Redwoods',
    tag_type: 'Natural features'
)

Tag.create!(
    name: 'River, stream, or creek',
    tag_type: 'Natural features'
)


SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Biking').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Boating').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Fishing').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Hiking').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Boating').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Surfing').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Swimming').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Wildlife watching').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Redwoods').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'River, stream, or creek').id
)

Booking.create!(
    owner_id: User.first.id,
    customer_id: User.find_by(email: 'demo@demo.com').id,
    spot_id: Spot.find_by(name: "Yosemite").id,
    start_date: Date.new(2022, 9, 01),
    end_date: Date.new(2022, 9, 04),
    children: 1,
    adults: 2,
    price: 400
)


# 5.times do 
#     Spot.create!({
#     name: 'Yosemite',
#     address1: '6107 Big Oak Flat Rd',
#     city: 'Groveland',
#     state: 'CA',
#     zipcode: 95321,
#     latitude: 37.80009018741985,
#     longitude: -119.87529410959473,
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

photo1 = {io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/1.jpg'), filename:'1.jpg'}
photo2 = {io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/2.jpg'), filename:'2.jpg'}
photo3 = {io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/3.jpg'), filename:'3.jpg'}
photo4 = {io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/4.jpg'), filename:'4.jpg'}
photo5 = {io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/5.jpg'), filename:'5.jpg'}



Spot.find_by(name: 'Yosemite').photos.attach([photo1,photo2,photo3,photo4,photo5])
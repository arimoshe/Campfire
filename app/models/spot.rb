# == Schema Information
#
# Table name: spots
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  address1    :string           not null
#  address2    :string
#  city        :string           not null
#  state       :string           not null
#  zipcode     :string           not null
#  longitude   :float            not null
#  latitude    :float            not null
#  price       :float            not null
#  acres       :integer          not null
#  capacity    :integer          not null
#  about       :string           not null
#  lodgings    :integer          not null
#  rvs         :integer          not null
#  tents       :integer          not null
#  high_demand :boolean          not null
#  owner_id    :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Spot < ApplicationRecord
    has_many_attached :photos

    validates :name, :address1, :city, :state, :zipcode, :longitude, :latitude, :price, :acres,  :capacity, :about, :lodgings, :rvs, :tents, :high_demand, :owner_id,  presence:true
    validates :state, inclusion: {in: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Minor Outlying Islands', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'U.S. Virgin Islands', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']}
    validates :zipcode, length: {minimum:5, maximum:5}, format: {with: /\d{5}/, message: "Please enter zipcode in the format 12345"}
    validates :longitude, :latitude, numericality: {less_than_or_equal_to: 360, greater_than_or_equal_to: -360 }
    

    has_many :spot_tags,
        dependent: :destroy
    has_many :bookings,
        dependent: :destroy

    has_many :reviews
    
    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    

end

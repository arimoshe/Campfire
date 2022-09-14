# == Schema Information
#
# Table name: bookings
#
#  id          :bigint           not null, primary key
#  customer_id :bigint           not null
#  owner_id    :bigint           not null
#  spot_id     :bigint           not null
#  start_date  :datetime         not null
#  end_date    :datetime         not null
#  price       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  adults      :integer          not null
#  children    :integer          not null
#
class Booking < ApplicationRecord


  validates :customer_id, :owner_id, :spot_id, :start_date, :end_date, :adults, :children, :price, presence: true

  belongs_to :customer,
  foreign_key: :customer_id,
  class_name: :User

  belongs_to :owner,
  foreign_key: :customer_id,
  class_name: :User

  belongs_to :spot
end

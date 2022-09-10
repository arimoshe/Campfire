# == Schema Information
#
# Table name: bookings
#
#  id          :bigint           not null, primary key
#  customer_id :bigint           not null
#  owner_id    :bigint           not null
#  spot_id     :bigint           not null
#  start_date  :datetime
#  end_date    :datetime
#  guests      :integer
#  price       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Booking < ApplicationRecord
  belongs_to :customer,
  foreign_key: :customer_id,
  class_name: :User

  belongs_to :owner,
  foreign_key: :customer_id,
  class_name: :User

  belongs_to :spot
end

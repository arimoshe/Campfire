# == Schema Information
#
# Table name: spot_tags
#
#  id         :bigint           not null, primary key
#  tag_id     :bigint           not null
#  spot_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class SpotTag < ApplicationRecord
  belongs_to :tag

  belongs_to :spot
end

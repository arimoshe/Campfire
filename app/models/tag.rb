# == Schema Information
#
# Table name: tags
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  quantity     :integer
#  availability :boolean
#  type         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Tag < ApplicationRecord
    
has_many :spot_tags,
foreign_key: :spot_id,
class_name: :SpotTag,
dependent: :destroy

end





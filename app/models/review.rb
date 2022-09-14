# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  spot_id     :bigint           not null
#  author_id   :bigint           not null
#  recommended :boolean          default(FALSE), not null
#  body        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord

     validates :spot_id, :author_id, :body, presence: true
    validates :recommended, inclusion: { in: [ true, false ] }

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :spot

end

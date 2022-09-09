class Review < ApplicationRecord

     validates :spot_id, :author_id, :body, presence: true
    validates :recommended, inclusion: { in: [ true, false ] }

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :spot

end

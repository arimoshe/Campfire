class Review < ApplicationRecord

    validates :spot_id, :author_id, :recommended, :body, presence: true

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :spot

end

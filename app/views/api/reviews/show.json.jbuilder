json.set! @review.id do
    json.extract! @review, :id, :author_id, :spot_id,:recommended, :body, :created_at
        json.author_first_name User.find_by(id: @review.author_id).first_name
        json.author_last_name User.find_by(id: @review.author_id).last_name
end


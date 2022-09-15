class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else 
      render json: @review.errors.full_messages, status: 422
    end

  end

  def update
  end

  def destroy
  end
end

private 

def review_params 
   params.require(:review).permit(
    :spot_id,
    :author_id,
    :recommended,
    :body
    )
end
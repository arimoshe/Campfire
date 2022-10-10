class Api::ReviewsController < ApplicationController

   before_action :require_logged_in

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else 
      render json: @review.errors.full_messages, status: 422
    end

  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
    
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review.destroy 
      render :show 
    else
       render json: @review.errors.full_messages, status: 422
    end
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
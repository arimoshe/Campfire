class Api::UsersController < ApplicationController
  
  wrap_parameters include: User.attribute_names + ['password']

  before_action :require_logged_in, only: [:update, :destroy]

  def create
    @user = User.new(user_params)
    if @user.save
        login!(@user)
        render :show
    else
        render json: @user.errors.full_messages, status: 422 #:unprossessable_entity  
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = current_user
    if @user.email != "demo@demo.com"
      if @user.destroy
        render :show 
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end


    private

    def user_params
      params.require(:user).permit(:email, :password, :first_name, :last_name)
    end


end

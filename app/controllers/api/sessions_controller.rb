class Api::SessionsController < ApplicationController

  before_action :require_logged_in, only: [:destroy]

  def show
      if @user = current_user
          render 'api/users/show'
      else
          render json: { user: nil }
      end
  end

  def create
      #expect params to have username and password
      email = params[:email]
      password = params[:password]
      @user = User.find_by_credentials(email, password)
      if @user
          login!(@user)
          render   'api/users/show'
      else
          render json: { errors: ['Invalid credentials']}, status: 422
      end
  end

  def destroy 
      logout! if logged_in?
      render json: { message: 'success' }
      #response will have no body
  end
end

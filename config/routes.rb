Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"



namespace :api, defaults: { format: :json } do
  get "/spot/:page", to: 'spots#index2'
  resources :users, only: [:create, :update, :destroy]
  resource :session, only: [:show, :create, :destroy]
  resources :spots, only: [:index, :show, :create]
  resources :bookings, only: [:create, :index, :update, :destroy]
  resources :reviews, only: [:create, :index, :update, :destroy]
end
## other routes here






  get '*path', to: "static_pages#frontend_index"
end

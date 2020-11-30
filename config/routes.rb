Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only:[:create, :show, :update]
    resources :businesses, only:[:index, :show] do 
      resources :reviews, only:[:create, :index]
    end
    resource :session, only: [:create, :destroy]
  end
  resources :reviews, only:[:show, :update, :destroy]
  root to: "static_pages#root"
end

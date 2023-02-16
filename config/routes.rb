Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'

  get '/auth', to: 'users#show'

  get '/me', to: 'users#show'

  delete '/logout', to: 'sessions#destroy'

  get '/dishes', to: 'dishes#index'

  post '/create_review', to: 'reviews#create'

  delete '/delete_account', to: 'users#destroy'

  patch '/edit_review', to: 'reviews#edit'

  get 'review', to: 'reviews#index'
end

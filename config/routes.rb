Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/coffee/ping', to: 'coffee#ping'
  get '/coffee', to:'coffee#index'
  get '/coffee/:id', to: 'coffee#show'
  post '/coffee/create', to: 'coffee#create'
  delete '/coffee/delete/:id', to: 'coffee#destroy'


  get '/post/ping', to: 'post#ping'
  get '/post', to: 'post#index'
  get  '/post/:id', to: 'post#show'
  post '/post', to: 'post#create'
  delete '/post/:id', to: 'post#destroy'

  get '/post/coffee', to: 'post#sort'
end

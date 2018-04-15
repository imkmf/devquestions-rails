Rails.application.routes.draw do
  root to: 'questions#index'
  get '/admin' => 'admin#index'
end

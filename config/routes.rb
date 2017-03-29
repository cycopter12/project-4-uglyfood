Rails.application.routes.draw do


  devise_for :users, controllers: { registrations: "users/registrations"}

  root 'welcome#index'
  get '*path', to: 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end

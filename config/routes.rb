Rails.application.routes.draw do



  resources :contents

  delete 'orders/delete_items/:id', to: 'orders#delete_items', as: 'delete_items'
  resources :orders
  get 'update_orders' => 'orders#update', :as => 'update'
  resources :outlet_produces

  devise_for :users, controllers: { registrations: "users/registrations", sessions: "users/sessions"}

  root 'welcome#index'
  get '*path', to: 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Type.create ([{category: 'fruits'},{category: 'vegetables'},{category: 'grains'},{category: 'poultry'}])

Supermarket.create([{name: 'Cold Storage'}, {name: 'NTUC'}, {name: 'Meidi-Ya'}, {name: 'Prime'}, {name: 'Sheng Siong'}, {name: 'U Star'},{name: 'YES'}])

Outlet.create([{name: 'FairPrice' ,branch:'HDB Hub', street_address:'500 Lorong 6 Toa Payoh, #B1-32/#01-33, HDB Hub', postal_code:'310500', supermarket_id: 2 }, {name: 'FairPrice', branch:'Havelock Rd', street_address:'50 Havelock Rd, Singapore ', postal_code:'160050', supermarket_id: 2 },{name: 'FairPrice Finest', branch:'Tiong Bahru Plaza', street_address:'302 Tiong Bahru Road, #B1-01/02, Tiong Bahru Plaza', postal_code:'168732', supermarket_id: 2},{name: 'Cold Storage' ,branch:'Great World City', street_address:'1 Kim Seng Promenade, #B1-18 19 Great World City, Great World City', postal_code:'237994', supermarket_id: 1 }])

Produce.create([{type_id: '1', name: 'apple', cost_per_unit: 0.50}, {type_id: '2', name: 'cabbage', cost_per_unit: 0.50}, {type_id: '1', name: 'pear', cost_per_unit: 0.50}, {type_id: '4', name: 'eggs', cost_per_unit: 0.50}, {type_id: '2', name: 'tomato', cost_per_unit: 0.50}, {type_id: '1', name: 'banana', cost_per_unit: 0.50}, {type_id: '2', name: 'lettuce', cost_per_unit: 0.50}, {type_id: '1', name: 'mango', cost_per_unit: 0.50}, {type_id: '1', name: 'orange', cost_per_unit: 0.50}, {type_id: '2', name: 'eggplant', cost_per_unit: 0.50}, {type_id: '2', name: 'broccoli', cost_per_unit: 0.50}, {type_id: '2', name: 'avocado', cost_per_unit: 0.50}, {type_id: '2', name: 'carrot', cost_per_unit: 0.50}, {type_id: '2', name: 'sweet potato', cost_per_unit: 0.50}, {type_id: '2', name: 'pumpkin', cost_per_unit: 0.50}, {type_id: '2', name: 'cucumber', cost_per_unit: 0.50}, {type_id: '2', name: 'potato', cost_per_unit: 0.50}, {type_id: '2', name: 'cauliflower', cost_per_unit: 0.50}, {type_id: '1', name: 'grapes', cost_per_unit: 0.50}, {type_id: '1', name: 'pineapple', cost_per_unit: 0.50}, {type_id: '1', name: 'watermelon', cost_per_unit: 0.50}, {type_id: '1', name: 'lemon', cost_per_unit: 0.50}, {type_id: '1', name: 'strawberry', cost_per_unit: 0.50}, {type_id: '1', name: 'blueberry', cost_per_unit: 0.50}, {type_id: '1', name: 'dragonfruit', cost_per_unit: 0.50}, {type_id: '1', name: 'peach', cost_per_unit: 0.50}, {type_id: '1', name: 'prune', cost_per_unit: 0.50}, {type_id: '1', name: 'cherry', cost_per_unit: 0.50}])

OutletProduce.create([{outlet_id: 1, produce_id: 2, quantity: 10, date: '2017-04-02'}, {outlet_id: 1, produce_id: 3, quantity: 20, date: Date.today}, {outlet_id: 1, produce_id: 4, quantity: 14, date: Date.today}, {outlet_id: 2, produce_id: 5, quantity: 12, date: Date.today}, {outlet_id: 2, produce_id: 2, quantity: 18, date: Date.today}, {outlet_id: 2, produce_id: 3, quantity: 26, date: Date.today}, {outlet_id: 1, produce_id: 7, quantity: 8, date: Date.today}])

User.create([{email: 'dre@gmail.com', organization_name: 'GA', street_name: '66 Toh Tuck Road', postal_code: '6969696', contact_number: '96784847', password: '123456', password_confirmation: '123456', outlet_id: 3}, {email: 'Andrethe@gmail.com', organization_name: 'GA', street_name: '66 Toh Tuck Road', postal_code: '6969696', contact_number: '96784847', password: '123456', password_confirmation: '123456', outlet_id: 3}])

Order.create([{outlet_produce_id: 1, user_id: 1, quantity_bought: 5, purchase_date: Date.today}, {outlet_produce_id: 3, user_id: 1, quantity_bought: 5, purchase_date: Date.today}, {outlet_produce_id: 2, user_id: 1, quantity_bought: 5, purchase_date: Date.today}, {outlet_produce_id: 4, user_id: 1, quantity_bought: 5, purchase_date: Date.today}])

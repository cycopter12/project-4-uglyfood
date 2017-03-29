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

Produce.create([{type_id: '1', name: 'apple'}, {type_id: '2', name: 'cabbage'}, {type_id: '1', name: 'pear'}, {type_id: '4', name: 'eggs'}, {type_id: '2', name: 'tomato'}, {type_id: '1', name: 'banana'}, {type_id: '2', name: 'lettuce'}, {type_id: '1', name: 'mango'}, {type_id: '1', name: 'orange'}, {type_id: '2', name: 'eggplant'}, {type_id: '2', name: 'broccoli'}, {type_id: '2', name: 'avocado'}, {type_id: '2', name: 'carrot'}, {type_id: '2', name: 'sweet potato'}, {type_id: '2', name: 'pumpkin'}, {type_id: '2', name: 'cucumber'}, {type_id: '2', name: 'potato'}, {type_id: '2', name: 'cauliflower'}, {type_id: '1', name: 'grapes'}, {type_id: '1', name: 'pineapple'}, {type_id: '1', name: 'watermelon'}, {type_id: '1', name: 'lemon'}, {type_id: '1', name: 'strawberry'}, {type_id: '1', name: 'blueberry'}, {type_id: '1', name: 'dragonfruit'}, {type_id: '1', name: 'peach'}, {type_id: '1', name: 'prune'}, {type_id: '1', name: 'cherry'}])

OutletProduce.create([{outlet_id: 1, produce_id: 2, quantity: 10, date: Date.today.strftime("%Y-%m-%d")}, {outlet_id: 1, produce_id: 3, quantity: 20, date: Date.today.strftime("%Y-%m-%d")}, {outlet_id: 1, produce_id: 4, quantity: 14, date: Date.today.strftime("%Y-%m-%d")}, {outlet_id: 2, produce_id: 5, quantity: 12, date: Date.today.strftime("%Y-%m-%d")}, {outlet_id: 2, produce_id: 2, quantity: 18, date: Date.today.strftime("%Y-%m-%d")}, {outlet_id: 2, produce_id: 3, quantity: 26, date: Date.today.strftime("%Y-%m-%d")}, {outlet_id: 1, produce_id: 7, quantity: 8, date: Date.today.strftime("%Y-%m-%d")}])

User.create([{email: 'dre@gmail.com', organization_name: 'GA', street_name: '66 Toh Tuck Road', postal_code: '6969696', contact_number: '96784847', password: '123456', password_confirmation: '123456'},{email: 'Andre@gmail.com', street_name: '66 Havor Rd', postal_code: '55555', contact_number: '96784847', password: '123456', password_confirmation: '99999', outlet_id: '1'}])



# Order.create([{outlet_produce_id: 1, user_id: 1, }])

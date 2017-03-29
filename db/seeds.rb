# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Type.create ([{category: 'fruits'},{category: 'vegetables'},{category: 'grains'},{category: 'poultry'}])

Supermarket.create([{name: 'Cold Storage'}, {name: 'NTUC'}, {name: 'Meidi-Ya'}, {name: 'Prime'}, {name: 'Sheng Siong'}, {name: 'U Star'},{name: 'YES'}])

Outlet.create([{branch:'HDB Hub', street_address:'500 Lorong 6 Toa Payoh, #B1-32/#01-33, HDB Hub', postal_code:'310500', supermarket_id:  }, {branch:'Havelock Rd', street_address:'50 Havelock Rd, Singapore ', postal_code:'160050' },{branch:'Tiong Bahru Plaza', street_address:' 302 Tiong Bahru Road, #B1-01/02, Tiong Bahru Plaza', postal_code:'168732' }])

User.create([{}])

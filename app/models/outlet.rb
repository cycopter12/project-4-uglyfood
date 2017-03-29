class Outlet < ApplicationRecord
  belongs_to :supermarket
  has_many :oulet_produce 
end

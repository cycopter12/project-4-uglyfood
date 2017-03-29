class OutletProduce < ApplicationRecord
  belongs_to :outlet
  belongs_to :produce

  has_many :orders 
end

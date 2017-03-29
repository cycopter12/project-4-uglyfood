class Outlet < ApplicationRecord
  belongs_to :supermarket

  has_many :outlet_produces
end

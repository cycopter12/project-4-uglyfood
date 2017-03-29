class Produce < ApplicationRecord
  belongs_to :type

  has_many :outlet_produces
end

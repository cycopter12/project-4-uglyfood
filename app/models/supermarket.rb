class Supermarket < ApplicationRecord
  has_many :outlets
  has_many :outlet_produces, :through => :outlets
end

class Order < ApplicationRecord
  belongs_to :outlet_produce
  belongs_to :user
end

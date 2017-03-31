class Order < ApplicationRecord
  belongs_to :outlet_produce
  belongs_to :user
  before_save :set_sub_total

  validates :outlet_produce_id, presence: true
  validates :user_id, presence: true
  validate :min_quantity

  def min_quantity
    if (quantity_bought < 0)
      p "-------------------------"
      p 'this should fail'
      p "-------------------------"
      errors.add(:quantity_bought, "needs to be greater than 0")
    end
  end

  def set_sub_total
    cost_per_item = Produce.find(OutletProduce.find(outlet_produce_id).produce_id).cost_per_unit
    self.cost = quantity_bought * cost_per_item
  end


end

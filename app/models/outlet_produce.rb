class OutletProduce < ApplicationRecord
  belongs_to :outlet
  belongs_to :produce

  has_many :orders


  validates :outlet_id, presence: true
  validates :produce_id, presence: true
  validate :min_quantity
  validate :min_price

  def min_quantity
    if (quantity < 0)
      p "-------------------------"
      p 'this should fail'
      p "-------------------------"
      errors.add('outlet_produce_quantity', "needs to be greater than 0")
    end
  end

  def min_price
    if (cost_per_unit < 0)
      p "-------------------------"
      p 'this should fail'
      p "-------------------------"
      errors.add('outlet_produce_cost_per_unit', "needs to be greater than 0")
    end
  end

  # def check_supermarket_user
  #   if !(outlet_id)
  #     p "-------------------------"
  #     p 'this should fail'
  #     p "-------------------------"
  #     errors.add('user', "needs to belong to an outlet")
  #   end
  # end





end

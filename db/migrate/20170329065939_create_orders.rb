class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.references :outlet_produce, foreign_key: true
      t.references :user, foreign_key: true
      t.integer :quantity_bought
      t.date :purchase_date
      t.decimal :cost

      t.timestamps
    end
  end
end

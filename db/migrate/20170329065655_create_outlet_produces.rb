class CreateOutletProduces < ActiveRecord::Migration[5.0]
  def change
    create_table :outlet_produces do |t|
      t.references :outlet, foreign_key: true
      t.references :produce, foreign_key: true
      t.integer :quantity
      t.date :date
      t.decimal :cost_per_unit

      t.timestamps
    end
  end
end

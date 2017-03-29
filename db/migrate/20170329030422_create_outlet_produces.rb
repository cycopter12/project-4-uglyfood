class CreateOutletProduces < ActiveRecord::Migration[5.0]
  def change
    create_table :outlet_produces do |t|
      t.integer :quantity
      t.date :date
      t.references :supermarket, foreign_key: true
      t.references :produce, foreign_key: true

      t.timestamps
    end
  end
end

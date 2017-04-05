class CreateOutlets < ActiveRecord::Migration[5.0]
  def change
    create_table :outlets do |t|
      t.string :street_address
      t.integer :postal_code
      t.references :supermarket, foreign_key: true
      t.string :branch
      t.string :town

      t.timestamps
    end
  end
end

class CreateProduces < ActiveRecord::Migration[5.0]
  def change
    create_table :produces do |t|
      t.string :name
      t.references :type, foreign_key: true

      t.timestamps
    end
  end
end

class CreateContents < ActiveRecord::Migration[5.0]
  def change
    create_table :contents do |t|
      t.string :project_type
      t.string :body
      t.string :image
      t.boolean :accepted

      t.timestamps
    end
  end
end

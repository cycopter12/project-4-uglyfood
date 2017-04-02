class AddColToContents < ActiveRecord::Migration[5.0]
  def change
    add_column :contents, :description, :string
  end
end

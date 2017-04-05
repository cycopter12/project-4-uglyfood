class AddFieldsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :organization_name, :string
    add_column :users, :street_name, :string
    add_column :users, :postal_code, :integer
    add_column :users, :contact_number, :integer
    add_column :users, :is_admin, :boolean, :default => false
    add_column :users, :outlet_id, :integer
    add_column :users, :town, :string

  end
end

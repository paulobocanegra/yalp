class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null:false
      t.string :bio, null:false
      t.integer :rating, null:false
      t.string :phone_number, null:false
      t.string :location, null:false
      t.string :hours, null:false
      t.timestamps
    end
    add_index :businesses, :name
  end
end

class CreateSpots < ActiveRecord::Migration[7.0]
  def change
    create_table :spots do |t|
      t.string :name, null: false
      t.string :address1, null: false
      t.string :address2, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.float :longitude, null: false, index: true
      t.float :latitude, null: false, index: true
      t.float :price, null: false
      t.integer :acres, null: false
      t.integer :capacity, null: false
      t.string :about, null: false
      t.integer :lodgings, null: false
      t.integer :rvs, null: false
      t.integer :tents, null: false
      t.boolean :high_demand, null: false
      t.references :owner, null:false, foreign_key: {to_table: :users}
      
      t.timestamps
    end
  end
end

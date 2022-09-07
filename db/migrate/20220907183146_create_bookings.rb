class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.references :customer, null: false, foreign_key: {to_table: :users}
      t.references :owner, null: false, foreign_key: {to_table: :users}
      t.references :spot, null: false, foreign_key: true
      t.datetime :start_date
      t.datetime :end_date
      t.integer :guests
      t.integer :price

      t.timestamps
    end
  end
end

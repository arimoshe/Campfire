class ChangeBookings < ActiveRecord::Migration[7.0]
  def change
    add_column :bookings, :adults, :integer
    add_column :bookings, :children, :integer
    remove_column :bookings, :guests, :integer
    change_column_null :bookings, :start_date, false
    change_column_null :bookings, :end_date, false
    change_column_null :bookings, :price, false
    change_column_null :bookings, :children, false
    change_column_null :bookings, :adults, false
  end
end

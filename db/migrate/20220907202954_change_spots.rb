class ChangeSpots < ActiveRecord::Migration[7.0]
  def change
    change_column_null :spots, :address2, true
  end
end

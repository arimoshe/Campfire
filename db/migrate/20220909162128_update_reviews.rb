class UpdateReviews < ActiveRecord::Migration[7.0]
  def change
    change_column_default :reviews, :recommended, false
  end
end

class ChangeZipcode < ActiveRecord::Migration[7.0]
  def change
    change_column :spots, :zipcode, :string
  end
end

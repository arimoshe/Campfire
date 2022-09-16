class ChangeSpotsHighDemand < ActiveRecord::Migration[7.0]
  def change
    change_column_null :spots, :high_demand, true
  end
end

class CreateSpotTags < ActiveRecord::Migration[7.0]
  def change
    create_table :spot_tags do |t|
      t.references :tag, null: false, foreign_key: true
      t.references :spot, null: false, foreign_key: true

      t.timestamps
    end
  end
end

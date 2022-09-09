class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :spot, null: false, foreign_key: true
      t.references :author,  null: false, foreign_key: {to_table: :users}
      t.boolean :recommended, null: false
      t.string :body, null:false
      t.timestamps 
    end
  end
end

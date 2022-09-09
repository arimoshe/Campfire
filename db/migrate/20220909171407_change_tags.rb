class ChangeTags < ActiveRecord::Migration[7.0]
  def up
    rename_column :tags, :type, :tag_type
  end
  def down
    rename_column :tags, :tag_type, :type
  end
end

class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :text
      t.string :emoji
      t.string :url
      t.datetime :published

      t.timestamps
    end
  end
end

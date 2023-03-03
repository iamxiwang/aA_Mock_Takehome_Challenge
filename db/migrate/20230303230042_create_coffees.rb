class CreateCoffees < ActiveRecord::Migration[7.0]
  def change
    create_table :coffees do |t|
      t.string :name
      t.integer :year
      t.float :caffine_content
      t.float :caffine_percentage

      t.timestamps
    end
    add_index :coffees, :name, unique: true
  end
end

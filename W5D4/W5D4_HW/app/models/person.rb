class Person < ApplicationRecord
    validates :name, :house_id, presence: true

    create_table :people do |t|
        t.string :name
        t.integer :house_id

        t.timestamps
    end
    
end

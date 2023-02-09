class House < ApplicationRecord
    validates :address, presence: true

    create_table :houses do |t|
        t.text :address

        t.timestamps
    end
    
end
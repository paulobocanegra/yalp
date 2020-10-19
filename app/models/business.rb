class Business < ApplicationRecord
    validates :name, :bio, :phone_number, :location, :hours, presence:true
    validates :rating, inclusion:{in: (1..5)}
end


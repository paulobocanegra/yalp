class Business < ApplicationRecord
    validates :name, :bio, :phone_number, :location, :hours, presence:true
    validates :rating, inclusion:{in: (1..5)}


    has_one_attached :main_photo
    has_many_attached :photos

    has_many :reviews,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Review
end


class Business < ApplicationRecord
    validates :name, :bio, :phone_number, :location, :hours, presence:true
    validates :rating, inclusion:{in: (1..5)}


    has_one_attached :main_photo
    
    has_many_attached :photos

    has_many :reviews,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Review

    has_many :users_reviewed,
    through: :reviews,
    source: :user

    def self.search_businesses(arg)
        a = (Business.where("name LIKE (?)", "%#{arg}%").map {|el| el}) +
            (Business.where("name LIKE (?)", "%#{arg.downcase}%").map {|el| el}) +
            (Business.where("name LIKE (?)", "%#{arg.upcase}%").map {|el| el}) +
            (Business.where("name LIKE (?)", "%#{arg.capitalize}%").map {|el| el}) 
        return a.uniq
    end
end


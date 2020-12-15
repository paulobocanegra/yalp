class Review < ApplicationRecord
    validates :body, :rating, :author_id, :business_id, presence:true
    validates :rating, inclusion:{in: (0..5)}

    belongs_to :business,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Business

    belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

    # has_one_attached :business_photo,
    # through: :business,
    # source: :main_photo

end

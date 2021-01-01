@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :body, :rating, :author_id, :business_id
        json.user review.user.first_name
        json.business review.business
        # json.business_photo review.business_photo
        # json.business_photo review.business.main_photo
    end
end
# json.average @average_rating

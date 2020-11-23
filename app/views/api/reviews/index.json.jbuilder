@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :body, :rating, :author_id, :business_id
        json.user review.user.first_name
    end
end
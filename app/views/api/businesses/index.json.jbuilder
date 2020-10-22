@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :bio, :rating, :location
        if business.main_photo
            json.main_photoUrl url_for(business.main_photo)
        end
        json.photoUrl business.photos.map {|photo| url_for(photo)}
    end
end
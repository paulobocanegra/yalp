@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :bio, :rating, :location
        if business.main_photo.attatched?
            json.main_photoUrl url_for(business.main_photo)
        else
            json.main_photoUrl ""
        end
        json.photoUrl business.photos.map {|photo| url_for(photo)}
    end
end
@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :bio, :rating, :location, :phone_number
        if business.main_photo.attached?
            json.main_photoUrl url_for(business.main_photo)
        else
            json.main_photoUrl ""
        end
        json.photoUrls business.photos.map {|photo| url_for(photo)}
    end
end
json.extract! business, :id, :name, :bio, :rating, :phone_number, :location, :hours
json.photoUrls @business.photos.map {|photo| url_for(photo)}

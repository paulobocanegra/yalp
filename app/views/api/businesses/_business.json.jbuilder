json.extract! @business, :id, :name, :bio, :rating, :phone_number, :location, :hours, :lat, :lng
json.main_photoUrl @business.main_photo
json.photoUrls @business.photos.map {|photo| url_for(photo)}

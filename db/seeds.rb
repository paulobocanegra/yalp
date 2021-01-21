# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Business.destroy_all
Review.destroy_all


User.create(email:"omar@yalp.com", password: "password", first_name:"Omar", last_name:"Fernandez", zip_code:"94510")
User.create(email:"diego@yalp.com", password: "password", first_name:"Diego", last_name:"Perez", zip_code:"94510")
User.create(email:"karen@yalp.com", password: "password", first_name:"Karen", last_name:"Smith", zip_code:"94523")
User.create(email:"nancy@yalp.com", password: "password", first_name:"Nancy", last_name:"Morrow", zip_code:"94523")
user1 = User.create(email:"testuser@yalp.com", password: "password", first_name:"testUser", last_name:"LastName", zip_code:"94523")

bus1 = Business.create(name:"Teleferic" , bio:"Tapas and Pintxos", rating: "4", phone_number:"(925) 395-0012", location:"San Francisco", hours:"11:30am to 10:30pm", lat:37.764783, lng:-122.424744)
bus2 = Business.create(name:"Lima-Limon" , bio:"Peruvian Cousine", rating: "4", phone_number:"(925) 836-1212", location:"Walnut Creek", hours:"11:30am to 10:30pm", lat:37.902696, lng:-122.063598)
bus3 = Business.create(name:"Monas Burgers" , bio:"Burgers and Shakes", rating: "4", phone_number:"(415) 415-0012", location:"Concord", hours:"11:30am to 9:00pm", lat:37.962726, lng:-122.986572)
bus4 = Business.create(name:"Heaven Sushi" , bio:"Japanese", rating: "5", phone_number:"(415) 472-7394", location:"Pleasant Hill", hours:"12:00pm to 8:30pm", lat:37.757291, lng:-122.399324)

bus1.main_photo.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/3L433Xd2AhXWNUEbc5PusTrm"), filename:"img1.jpg");
bus2.main_photo.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/1u3MBbxcVJq5dibsiwAAisxd"), filename:"img5.jpg");
bus3.main_photo.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/5sDbRn22jyJQhwsrhj8FzZoA"), filename:"img9.jpg");
bus4.main_photo.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/6EfJbE59kFaf1kcjqqqCcqDj"), filename:"img13.jpg");


bus1.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/3L433Xd2AhXWNUEbc5PusTrm"), filename:"img1.jpg");
bus1.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/3grJm6WDquAedbB5WvjsKnqG"), filename:"img2.jpg");
bus1.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/dKKz2QL266r6szmCnLMhWqru"), filename:"img3.jpg");
bus1.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/69g3smTabB6isnHBR8q17VhE"), filename:"img4.jpg");

bus2.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/1u3MBbxcVJq5dibsiwAAisxd"), filename:"img17.jpg");
bus2.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/dKKz2QL266r6szmCnLMhWqru"), filename:"img6.jpg");
bus2.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/6cXLVKFoV3UwS6N5SZoTeRis"), filename:"img7.jpg");
bus2.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/hjRDFQFSojppffPPbSKqEY85"), filename:"img8.jpg");

bus3.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/5sDbRn22jyJQhwsrhj8FzZoA"), filename:"img9.jpg");
bus3.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/SQfKZ4PojhziKro7BzLmF1bD"), filename:"img10.jpg");
bus3.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/BzZGncQcmFzVtbFgUVkFZayq"), filename:"img11.jpg");
bus3.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/dKKz2QL266r6szmCnLMhWqru"), filename:"img12.jpg");

bus4.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/6EfJbE59kFaf1kcjqqqCcqDj"), filename:"img13.jpg");
bus4.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/hjRDFQFSojppffPPbSKqEY85"), filename:"img14.jpg");
bus4.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/nc8Nh6phzRd62rFUhKRpTSiP"), filename:"img15.jpg");
bus4.photos.attach(io: open("https://yalp-yalp-dev.s3-us-west-1.amazonaws.com/2KPS99CfLjpJGxrqBZYeagq6"), filename:"img16.jpg");

review1 = Review.create(body:"The food was amazing, service was even Better!", rating:4, author_id:user1.id, business_id:bus1.id)
review2 = Review.create(body:"The food was amazing, service was even Better!!", rating:4, author_id:user1.id, business_id:bus2.id)
review3 = Review.create(body:"The food was amazing, service was even Better!", rating:4, author_id:user1.id, business_id:bus3.id)
review4 = Review.create(body:"The food was amazing, service was even Better!", rating:4, author_id:user1.id, business_id:bus4.id)
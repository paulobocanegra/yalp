# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(email:"omar@yalp.com", password: "password", first_name:"Omar", last_name:"Fernandez", zip_code:"94510")
User.create(email:"diego@yalp.com", password: "password", first_name:"Diego", last_name:"Perez", zip_code:"94510")
User.create(email:"karen@yalp.com", password: "password", first_name:"Karen", last_name:"Smith", zip_code:"94523")
User.create(email:"nancy@yalp.com", password: "password", first_name:"Nancy", last_name:"Morrow", zip_code:"94523")
User.create(email:"testuser@yalp.com", password: "password", first_name:"testUser", last_name:"LastName", zip_code:"94523")

Business.create(name:"Teleferic" , bio:"Tapas and Pintxos", rating: "4", phone_number:"(925) 395-0012", location:"Walnut Creek", hours:"11:30am to 10:30pm")
Business.create(name:"Lima-Limon" , bio:"Peruvian Cousine", rating: "4", phone_number:"(925) 836-1212", location:"Walnut Creek", hours:"11:30am to 10:30pm")
Business.create(name:"Monas Burgers" , bio:"Burgers and Shakes", rating: "4", phone_number:"(415) 415-0012", location:"Concord", hours:"11:30am to 9:00pm")
Business.create(name:"Heaven Sushi" , bio:"Japanese", rating: "5", phone_number:"(415) 472-7394", location:"Pleasant Hill", hours:"12:00pm to 8:30pm")
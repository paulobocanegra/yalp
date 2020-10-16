# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(email:"omar@omar.com", first_name:"Omar", last_name:"LastName", zip_code:"94523")
User.create(email:"diego@diego.com", first_name:"Diego", last_name:"LastName", zip_code:"94523")
User.create(email:"testuser@yalp.com", first_name:"testUser", last_name:"LastName", zip_code:"94523")
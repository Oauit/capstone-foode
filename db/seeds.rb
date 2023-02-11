# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Dish.destroy_all
Review.destroy_all
puts "seeding"

a=User.create(name: "Lily", password: "123")

a=Dish.create(name: "Bulgogi", image_url: "https://www.allrecipes.com/thmb/uCGNqSIAeoGUaOtUf6TI1r5qURs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100606-beef-bulgogi-3x2-264-dba0ed64f1034f28a638031447ebb47a.jpg")
b=Dish.create(name: "Kalbi", image_url: "https://www.allrecipes.com/thmb/uCGNqSIAeoGUaOtUf6TI1r5qURs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100606-beef-bulgogi-3x2-264-dba0ed64f1034f28a638031447ebb47a.jpg")

one=Review.create(title: "Good Bulgogi", description: "It was pretty good Bulgogi!", score: 4, dish_id: 1, user_id: 1)

puts "done seeding!"
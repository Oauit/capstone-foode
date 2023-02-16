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
a=User.create(name: "Kelly", password: "asdf")
a=User.create(name: "Ben", password: "zxcv")



a=Dish.create(name: "Bulgogi", image_url: "https://www.allrecipes.com/thmb/uCGNqSIAeoGUaOtUf6TI1r5qURs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100606-beef-bulgogi-3x2-264-dba0ed64f1034f28a638031447ebb47a.jpg")
b=Dish.create(name: "Kalbi", image_url: "https://www.allrecipes.com/thmb/uCGNqSIAeoGUaOtUf6TI1r5qURs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100606-beef-bulgogi-3x2-264-dba0ed64f1034f28a638031447ebb47a.jpg")
10.times {Dish.create(name: Faker::Food.dish, image_url: Faker::LoremFlickr.image(search_terms: ["korean","food"]))}


one=Review.create(title: "Good Bulgogi", description: "It was pretty good Bulgogi!", score: 4, dish_id: 1, user_id: 1)
two=Review.create(title: "Delicious Kalbi", description: "Fire!", score: 5, dish_id: 2, user_id: 1)
three=Review.create(title: "Worst Kalbi Ever", description: "Fire the chef!", score: 1, dish_id: 2, user_id: 2)
four=Review.create(title: "Mid tier meat", description: "Wasn't Great wasn't terrible", score: 3, dish_id: 1, user_id: 2)
five=Review.create(title: "Banging Like a Biscuit", description: "Slap your mama good", score: 5, dish_id: 1, user_id: 3)
50.times {Review.create(title: Faker::Lorem.sentence(word_count: rand(1..4)), description: Faker::Lorem.sentence(word_count: rand(4..8)), score: rand(2..5), dish: Dish.all.sample, user: User.all.sample)}


puts "done seeding!"
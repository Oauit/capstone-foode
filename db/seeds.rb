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



a=Dish.create(name: "Bulgogi", image_url: "https://i.imgur.com/88I7Q2t.jpeg")
b=Dish.create(name: "Kalbi", image_url: "https://i.imgur.com/uSMsU2H.jpeg")
c=Dish.create(name: "Soft Tofu Stew", image_url: "https://i.imgur.com/8fjRmqp.jpeg")
d=Dish.create(name: "Kimchi Stew", image_url: "https://i.imgur.com/Nrx080S.jpeg")
e=Dish.create(name: "Kimchi Fried Rice", image_url: "https://i.imgur.com/AdHpgoq.jpeg")
f=Dish.create(name: "Vegetable Fried Rice", image_url: "https://i.imgur.com/1w8B1MI.jpeg")
g=Dish.create(name: "Cold Noodles", image_url: "https://i.imgur.com/OU9732x.jpeg")
h=Dish.create(name: "Stir Fried Seafood Udon", image_url: "https://i.imgur.com/3WnMi1c.jpeg")
i=Dish.create(name: "BibimBap", image_url: "https://i.imgur.com/rC56DbJ.jpeg")
j=Dish.create(name: "Vegetable Pancake", image_url: "https://i.imgur.com/Cr99MpG.jpeg")
k=Dish.create(name: "Tteokbokki", image_url: "https://i.imgur.com/9sio8tD.jpeg")



one=Review.create(title: "Good Bulgogi", description: "It was pretty good Bulgogi!", score: 4, dish_id: 1, user_id: 1)
two=Review.create(title: "Delicious Kalbi", description: "Fire!", score: 5, dish_id: 2, user_id: 1)
three=Review.create(title: "Worst Kalbi Ever", description: "Fire the chef!", score: 1, dish_id: 2, user_id: 2)
four=Review.create(title: "Mid tier meat", description: "Wasn't Great wasn't terrible", score: 3, dish_id: 1, user_id: 2)
five=Review.create(title: "Banging Like a Biscuit", description: "Slap your mama good", score: 5, dish_id: 1, user_id: 3)
50.times {Review.create(title: Faker::Lorem.sentence(word_count: rand(1..4)), description: Faker::Lorem.sentence(word_count: rand(4..8)), score: rand(2..5), dish: Dish.all.sample, user: User.all.sample)}


puts "done seeding!"
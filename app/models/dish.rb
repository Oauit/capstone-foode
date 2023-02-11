class Dish < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
end

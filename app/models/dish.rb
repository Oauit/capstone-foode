class Dish < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    def avg_score
        self.reviews.average(:score).to_i
    end
    
end

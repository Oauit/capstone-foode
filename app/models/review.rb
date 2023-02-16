class Review < ApplicationRecord
  belongs_to :dish
  belongs_to :user

  
  def dish_name 
    self.dish.name
  end
end

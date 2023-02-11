class Review < ApplicationRecord
  belongs_to :dish
  belongs_to :user

  def good_rating
    rating = Rating.where(game_image_id: game_image.id).first
  end
end

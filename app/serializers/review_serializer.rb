class ReviewSerializer < ActiveModel::Serializer
    
    attributes :id, :title, :description, :score, :dish_id, :dish_name, :dish
end
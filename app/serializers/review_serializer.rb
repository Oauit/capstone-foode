class ReviewSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :title, :description, :score, :dish_id, :dish
end
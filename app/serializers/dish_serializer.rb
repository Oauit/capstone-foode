class DishSerializer < ActiveModel::Serializer
    
    attributes :id, :name, :image_url, :slug, :avg_score

    has_many :reviews
    has_many :users
end
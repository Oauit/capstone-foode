class DishSerializer 
    include FastJsonapi::ObjectSerializer
    attributes :id, :name, :image_url, :slug

    has_many :reviews
    has_many :users
end
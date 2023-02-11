class UserSerializer 
    include FastJsonapi::ObjectSerializer
    attributes :id, :name
    has_many :reviews
    has_many :dishes
end
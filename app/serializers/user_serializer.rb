class UserSerializer < ActiveModel::Serializer
    
    attributes :id, :name
    has_many :reviews
    has_many :dishes
end
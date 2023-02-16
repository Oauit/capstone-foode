class User < ApplicationRecord
    has_secure_password 
    has_many :reviews, dependent: :destroy
    has_many :dishes, through: :reviews

    validates :name, presence: true, uniqueness: true
end

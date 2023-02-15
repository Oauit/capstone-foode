class DishesController < ApplicationController
    
    def index
      dish = Dish.all

      render json: dish
    end

    def show
      dish = Dish.find_by(slug: params[:slug])
      render json: dish, status: :success
    end

    def create
      dish = Dish.new(dish_params)

      if dish.save 
        render json: dish, status: :success
      else
        render json: {error: dish.errors.messages }, status: 422
      end
    end

    def update
      dish = Dish.find_by(slug: params[:slug])

      if dish.update(dish_params) 
        render json: dish, status: :success
      else
        render json: {error: dish.errors.messages }, status: 422
      end
    end
    
    def destroy
      dish = Dish.find_by(slug: params[:slug])

      if dish.destroy
        head :no_content
      else
        render json: {error: dish.errors.messages }, status: 422
      end
    end

    private

    def dish_params
      dish = params[:dish]
      dish ? dish.permit(:name, :image_url) : {}
    end

    def options 
      @options ||= { include: %i[reviews]}
    end
end
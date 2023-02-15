class ReviewsController < ApplicationController
    
    def create
        review = Review.new(review_params)

        if review.save
            render json: review, status: :created
        else
            render json: { error: review.errors.messages }, status: 422
        end
    end

    def destroy
        review = Review.find(params[:id])


        if review.destroy
            head :no_content
        else
            render json: { error: review.errors.messages }, status: 422
        end

    end

    private
    
    def review_params
        params.permit(:title, :description, :score, :dish_id, :user_id)
    end
end
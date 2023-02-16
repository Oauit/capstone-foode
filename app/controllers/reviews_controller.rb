class ReviewsController < ApplicationController
    
    def create
        review = Review.new(review_params)
        review.score = review_params[:score].to_i
        if review.save
            render json: review, status: :created
        else
            puts review.inspect
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
        params.require(:review).permit(:title, :description, :score, :dish_id, :user_id)
    end
end
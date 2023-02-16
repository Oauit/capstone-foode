class UsersController < ApplicationController
    
# rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
# skip_before_action :authorize

    # def show
    #     current_user = User.find(session[:user_id])
    #     render json: current_user
    # end

    def show
        if session[:user_id].present?
          current_user = User.find(session[:user_id])
          render json: current_user
        else
          render json: {error: "User not found"}, status: :not_found
        end
      end
      

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def destroy
      user = User.find(session[:user_id])
        if user.destroy
            head :no_content
        else
            render json: { error: user.errors.messages }, status: 422
        end
    end


    private
    def render_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end
    def user_params
        params.permit(:name, :password)
    end



end
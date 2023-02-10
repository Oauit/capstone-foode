# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
    include ActionController::Cookies

    def hello_world
        puts "Session: #{session.inspect}"
        session[:count] = (session[:count] || 0) + 1
        puts "Session after increment: #{session.inspect}"
        render json: { count: session[:count] }, content_type: 'application/json'
    end
end
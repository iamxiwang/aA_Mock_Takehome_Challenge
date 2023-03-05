class CoffeesController < ApplicationController
    def ping
        render json: {'status': 'good'}
    end
    
    def index
        @coffees = Coffee.order('#{params[:order]}').all
        render :index
    end

    def show
        @coffee = Coffee.find(params[:id])
        render :show
    end

    def create
        @coffee = Coffee.new(coffee_params)

        if @coffee.save
            render :show
        else
            render json: @coffee.errors.full_messages, status: 422
        end
    end

    def destroy
        @coffee = Coffee.find_by(id: params[:id])
        if @coffee.destroy
            render json: {messages: 'coffee is sucessfully removed'}
        end
    end

end
class CoffeesController < ApplicationController
    def ping
        render json: {'status': 'good'}
    end
    
    def index
        query = params[:order]
        if query == 'asc'
            @coffees = Coffee.order(:name).all
        else
            @coffees = Coffee.order(name: :desc).all
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


    private

    def coffee_params
        params.require(:coffee).permit(
            :name, :year, :caffine_content, :caffine_percentage
        )
    end

end
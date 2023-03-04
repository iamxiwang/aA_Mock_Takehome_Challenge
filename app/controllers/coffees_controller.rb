class CoffeesController < ApplicationController
    def ping
        render json: status: 'good'
    end
    
    def index
        @coffees = Coffee.order('params[:order]').all
        render :index
    end

    def show
        @coffee = Coffee.find(params[:id])
        render :show
    end

end
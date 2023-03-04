class CoffeesController < ApplicationController

    def index
        @coffees = Coffee.order('params[:order]').all
        render :index
    end

    def show
        @coffee = Coffee.find(params[:id])
        render :show
    end

end
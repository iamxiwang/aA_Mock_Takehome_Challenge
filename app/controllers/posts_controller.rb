class PostsController  < ApplicationController


        def ping
            render json: {'status':'good'}
        end

        def index
            @posts = Post.order('#{params[:order]}').all
            render :index
        end




end
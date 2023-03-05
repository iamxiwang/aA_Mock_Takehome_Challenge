class PostsController  < ApplicationController


        def ping
            render json: {'status':'good'}
        end

        def index
            query = params[:order]
            if query == 'asc'
                @posts = Post.order(:created_at)
            else
                @posts = Post.order(created_at: :desc)
            end
            render :index
        end

        def show
            @post = Post.find(params[:id])
            render :show
        end

        def create
            @post = Post.new(post_params)
            if @post.save
                render :show
            else
                render json:@post.errors.full_messages, status: 422
            end
        end

        def destroy
            @post = Post.find_by(id: params[:id])
            if @post.destroy
                render json: {messages: 'post is sucessfully removed'}
            end
        end
            
        private

        def post_prarms

            params.require(:post).permit(:title, :coffee_id,:text,:rating)
        end



end
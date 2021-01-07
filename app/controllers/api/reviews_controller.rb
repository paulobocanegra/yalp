class Api::ReviewsController < ApplicationController
    def index
        # @reviews = Review.all
        # render :index
        # if params[:business_id] == "all"
        #     @reviews = Review.all
        # else
        #     @reviews = Review.where(business_id: params[:business_id])
        # end
        if params.has_key?(:user_id)
            @reviews = Review.where(author_id: params[:user_id])
        
        elsif params.has_key?(:business_id)
            @reviews = Review.where(business_id: params[:business_id])
            # @average_rating = @reviews.map{|review| review.rating}.sum/@reviews.length
        else
            @reviews = Review.all
        end
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def create
        @review = Review.create(review_params)
        @review.author_id = current_user.id
        if @review.save && @review.rating
            render :show
        else
            render json: ['Make sure to select stars for rating'], status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        # @review.destroy
        if @review.destroy
            render :show
        else
            render json: ['Cannot find the specified review'], status: 404
        end
    end
    

    private
    def review_params
        params.require(:review).permit(:body, :rating, :author_id, :business_id)
    end
end

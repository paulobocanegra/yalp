class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 404
        end
    end



    private
    def review_params
        params.require(:review).permit(:body, :rating, :author_id, :business_id)
    end
end

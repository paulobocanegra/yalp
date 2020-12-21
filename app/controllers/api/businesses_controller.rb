class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.all
        render :index
    end

    def show
        @business = Business.with_attached_photos.find(params[:id])
        render :show
    end

    def search
        query=params[:query]
        @businesses = Business.where('name ILIKE ? OR bio ILIKE ?', "%#{query}%", "%#{query}%")

        if @businesses.length > 0
            render :index
        else
            render json: ["Sorry, we did not find any results for #{query}", "Try another search"], status: 422
        end
    end

    private
    def business_params
        params.require(:business).permit(:name, :bio, :rating, :phone_number, :location, :hours, photos:[])
    end
end

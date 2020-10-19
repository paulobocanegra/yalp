class Api::BusinessesController < ApplicationController
    def index
        @businesses = Businesses.all
        render :index
    end

    def show
        @business = Businesses.find(params[:id])
        render :show
    end

    private
    def business_params
        params.require(:business).permit(:name, :bio, :rating, :phone_number, :location, :hours)
    end
end

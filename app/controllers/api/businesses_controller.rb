class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.all
        render :index
    end

    def show
        @business = Business.find(params[:id])
        render :show
    end

    private
    def business_params
        params.require(:business).permit(:name, :bio, :rating, :phone_number, :location, :hours)
    end
end

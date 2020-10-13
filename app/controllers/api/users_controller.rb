class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(user)
            render :show
        else
            render json:@users.errors.full_messages, status: 404
        end
    end

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
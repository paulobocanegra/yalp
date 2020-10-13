class SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:username]
        )
        if @user
            login(@user)
            render :json
        else
            render json: ["Invalid Credentials"], status: 404
        end
    end

    def destroy
        if current_user
            logout(current_user)
            render json:{}
        else
            render json: ["Not Logged In"], status:404
        end
    end
end

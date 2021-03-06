class User < ApplicationRecord
    attr_reader :password
    validates :email, presence:true
    validates :session_token, :email, uniqueness:true
    validates :password_digest, :session_token, presence:true
    validates :password, length: {minimum: 6, allow_nil:true}
    before_validation :ensure_session_token
    #SPIRE

    has_many :reviews,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Review

    has_many :businesses_reviewed,
    through: :reviews,
    source: :business

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64 
    end
end

class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: {message: "Password can't be blank"}
    validates :password, length: {minimun: 6, allow_nil: true}
    before_validation :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
    
        
    end

    def is_password?(password)
            
    end
      
end

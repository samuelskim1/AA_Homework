require 'rails_helper'

RSpec.describe User, type: :model do

    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6) }

    describe '#is_password?' do
      it "checks if the password is valid"
      expect()
    end
    

    describe '#reset_session_token' do

    end
      
    describe '::is_password?' do

    end
end



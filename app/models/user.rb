# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  response_rate   :float
#  response_time   :string
#  first_name      :string           not null
#  last_name       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

  before_validation :ensure_session_token

  has_many :spots,
  foreign_key: :owner_id,
        dependent: :destroy

  has_many :bookings,
  foreign_key: :customer_id,
  class_name: :Booking,
        dependent: :destroy

  has_many :reviews,
  foreign_key: :author_id,
  class_name: :Review,
  dependent: :destroy

  has_secure_password

  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP , message: "Please enter a valid email address" }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true


  def self.find_by_credentials(email, password)
  
    user = User.find_by(email: email)
    if user&.authenticate(password) # user && user.authenticate(password)
      return user
    else
      return nil
    end
end

def reset_session_token!
  self.session_token = generate_unique_session_token
  save!
  self.session_token
end

  private

  def generate_unique_session_token
    while true
      token = SecureRandom.urlsafe_base64
      return token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
      self.session_token ||= generate_unique_session_token
  end


end

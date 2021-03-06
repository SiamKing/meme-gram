class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  after_action  :set_csrf_cookie_for_ng

  def index
  end

  def current_user
    session[:user_id] ||= User.new
  end

  def logged_in?
    !!current_user
  end

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected

  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end
end

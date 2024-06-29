class ClockController < ApplicationController
  def show
  end

  def current_time
    render json: { time: Time.current.strftime("%H:%M:%S") }
  end
end

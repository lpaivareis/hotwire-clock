Rails.application.routes.draw do
  get 'clock/show'
  get 'clock/current_time', to: 'clock#current_time'
  root 'clock#show'
end

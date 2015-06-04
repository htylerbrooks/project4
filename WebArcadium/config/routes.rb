Rails.application.routes.draw do
  get 'connect_four/game'

  get 'tic_tac_toe/game'

  root 'welcome#index'


end

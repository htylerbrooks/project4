require 'test_helper'

class ConnectFourControllerTest < ActionController::TestCase
  test "should get game" do
    get :game
    assert_response :success
  end

end

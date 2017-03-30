require 'test_helper'

class OutletProducesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get outlet_produces_index_url
    assert_response :success
  end

  test "should get show" do
    get outlet_produces_show_url
    assert_response :success
  end

  test "should get new" do
    get outlet_produces_new_url
    assert_response :success
  end

  test "should get update" do
    get outlet_produces_update_url
    assert_response :success
  end

  test "should get sell" do
    get outlet_produces_sell_url
    assert_response :success
  end

end

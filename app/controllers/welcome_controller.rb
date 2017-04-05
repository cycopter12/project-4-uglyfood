class WelcomeController < ApplicationController
  def index
    @contents = Content.all
      #code...
  end
end

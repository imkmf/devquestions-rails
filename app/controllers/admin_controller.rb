class AdminController < ApplicationController
  def index
    @questions = Question.all
    @theme = Themer.theme(string: 'admin')
  end
end

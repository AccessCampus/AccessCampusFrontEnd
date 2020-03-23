defmodule AccessUbcWeb.PageController do
  use AccessUbcWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end

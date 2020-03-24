defmodule AccessUbcWeb.Router do
  use AccessUbcWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", AccessUbcWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", AccessUbcWeb do
    pipe_through :api

    get "/buildings", BuildingController, :index
    get "/buildings/:id", BuildingController, :show
  end
end

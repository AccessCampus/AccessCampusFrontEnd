defmodule AccessUbcWeb.Router do
  use AccessUbcWeb, :router

  pipeline :browser do
    plug CORSPlug, origin: "*"
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug CORSPlug, origin: "*"
    plug :accepts, ["json"]
    plug :fetch_session
    plug :fetch_flash
  end

  scope "/", AccessUbcWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/api", AccessUbcWeb do
    pipe_through :api

    get "/locations", LocationController, :index
    get "/locations/new", LocationController, :new
    post "/locations/new", LocationController, :create
  end
end

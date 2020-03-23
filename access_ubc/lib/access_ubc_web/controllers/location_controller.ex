defmodule AccessUbcWeb.LocationController do
  use AccessUbcWeb, :controller

  alias AccessUbc.Repo
  alias AccessUbc.Locations
  alias AccessUbc.Locations.Location

  action_fallback AccessUbcWeb.FallbackController

  def index(conn, _params) do
    locations = Locations.list_locations()
    render(conn, "index.json", locations: locations)
  end

  def show(conn, %{"id" => id}) do
    location = Locations.get_location!(id)

    if location do
      render(conn, "show.json", location: location)
    else
      conn
      |> put_status(:not_found)
      |> render("show.json", location: location)
    end
  end

  def update(conn, %{"id" => id, "location" => location_params}) do
    location = Locations.get_location!(id)

    with {:ok, %Location{} = location} <- Locations.update_location(location, location_params) do
      render(conn, "show.json", location: location)
    end
  end

  def delete(conn, %{"id" => id}) do
    location = Locations.get_location!(id)

    with {:ok, %Location{}} <- Locations.delete_location(location) do
      send_resp(conn, :no_content, "")
    end
  end

  def new(conn, _params) do
    changeset = Location.changeset(%Location{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"location" => location}) do
    changeset = Location.changeset(%Location{}, location)
    case Repo.insert(changeset) do
      {:ok, _post} ->
        render(conn, "new.html", changeset: changeset)
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end
end

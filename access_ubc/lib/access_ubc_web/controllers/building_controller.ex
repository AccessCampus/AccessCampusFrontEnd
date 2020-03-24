defmodule AccessUbcWeb.BuildingController do
  use AccessUbcWeb, :controller

  alias AccessUbc.Locations
  alias AccessUbc.Locations.Building

  action_fallback AccessUbcWeb.FallbackController

  def index(conn, _params) do
    buildings = Locations.list_buildings()
    render(conn, "index.json", buildings: buildings)
  end

  def create(conn, %{"building" => building_params}) do
    with {:ok, %Building{} = building} <- Locations.create_building(building_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.building_path(conn, :show, building))
      |> render("show.json", building: building)
    end
  end

  def show(conn, %{"id" => id}) do
    building = Locations.get_building(id)

    if building do
      render(conn, "show.json", building: building)
    else
      conn
      |> put_status(:not_found)
      |> render("show.json", building: building)
    end
  end

  def update(conn, %{"id" => id, "building" => building_params}) do
    building = Locations.get_building(id)

    with {:ok, %Building{} = building} <- Locations.update_building(building, building_params) do
      render(conn, "show.json", building: building)
    end
  end

  def delete(conn, %{"id" => id}) do
    building = Locations.get_building(id)

    with {:ok, %Building{}} <- Locations.delete_building(building) do
      send_resp(conn, :no_content, "")
    end
  end
end

defmodule AccessUbc.Locations.Building do
  use Ecto.Schema
  import Ecto.Changeset

  schema "buildings" do
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(building, attrs) do
    building
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end

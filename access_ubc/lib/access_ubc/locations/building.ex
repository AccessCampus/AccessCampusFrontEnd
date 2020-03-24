defmodule AccessUbc.Locations.Building do
  use Ecto.Schema
  import Ecto.Changeset

  schema "buildings" do
    field :entrances, {:array, :map}
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(building, attrs) do
    building
    |> cast(attrs, [:name, :entrances])
    |> validate_required([:name, :entrances])
  end
end

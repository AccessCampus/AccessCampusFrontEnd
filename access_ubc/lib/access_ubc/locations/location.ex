defmodule AccessUbc.Locations.Location do
  use Ecto.Schema
  import Ecto.Changeset

  schema "locations" do
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(location, attrs \\ %{}) do
    location
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end
end

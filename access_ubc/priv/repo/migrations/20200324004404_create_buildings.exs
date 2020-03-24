defmodule AccessUbc.Repo.Migrations.CreateBuildings do
  use Ecto.Migration

  def change do
    create table(:buildings) do
      add :name, :string

      timestamps()
    end

  end
end

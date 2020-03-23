defmodule AccessUbc.Repo do
  use Ecto.Repo,
    otp_app: :access_ubc,
    adapter: Ecto.Adapters.Postgres
end

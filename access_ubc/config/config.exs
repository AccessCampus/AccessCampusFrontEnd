# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :access_ubc,
  ecto_repos: [AccessUbc.Repo]

# Configures the endpoint
config :access_ubc, AccessUbcWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "82ymv4cQw80cpGrMAMYvGXUY4kwScPdX1b0JLmw2aMMJgU9E9m50ydK/I9YX075U",
  render_errors: [view: AccessUbcWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: AccessUbc.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "6wW8VPdf"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"

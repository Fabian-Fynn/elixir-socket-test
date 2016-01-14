use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
config :socket_test, SocketTest.Endpoint,
  secret_key_base: "w1+Cg3kDlnpY2Tqib+O9/UTXoEJrK/60NVe3CJn4mzbT7vKnHO56C5o7E/wI2yn4"

# Configure your database
config :socket_test, SocketTest.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "socket_test_prod",
  pool_size: 20

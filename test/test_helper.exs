ExUnit.start

Mix.Task.run "ecto.create", ~w(-r SocketTest.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r SocketTest.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(SocketTest.Repo)


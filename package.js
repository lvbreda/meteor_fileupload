Package.describe({
  summary: "Allow post requests",
});

Package.on_use(function (api) {
  api.use(['mongo-livedata']);
  api.add_files('server.js', ['server']);
});



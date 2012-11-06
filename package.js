Package.describe({
  summary: "File upload",
});

Package.on_use(function (api) {
	api.use(['underscore', 'templating'], 'client');

  api.add_files('server.js', ['server']);
  api.add_files(['file_upload.js','upload.css','upload.html','client.js'], ['client']);
});



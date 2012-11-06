console.log(Template);
 Handlebars.registerHelper(
    "file_upload",
    function (options) {
        return new Handlebars.SafeString(Template.file_upload());
    });


Template.file_upload.rendered = function(){
	 var uploader = new qq.FileUploader({
                element: this.find('.file-uploader'),
                action: '/upload',
                debug: true,
                multiple : false,
                forceMultipart : true,
                onComplete :function(id,filename,response){console.log();this.find('.file-path').value = JSON.stringify(response); console.log(this.find('.file-path').value)}
     });  
}

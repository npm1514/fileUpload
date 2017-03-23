var getPhotos = function(){
  $.ajax({
    method: "GET",
    url: "/image"
  }).then(function(res){
    console.log(res);
    for (var i = 0; i < res.length; i++) {
      $('#imgs').append('<h1>'+res[i].title+'</h1><img src="'+res[i].url+'">')
    }
  });
};
getPhotos();
// -------------------------------
$('#uploadForm').on('submit', function(e){
  e.preventDefault();
  $.ajax({
    method: "POST",
    url: "/image",
    data: new FormData($(this)[0]),
    contentType: false,
    processData: false,
    enctype: 'multipart/form-data'
  }).then(function(res){
    postimage(res);
  });
});

var postimage = function(res){
  var data = {
    url: "./images/"+res.filename,
    title: $('#imagetitle').val()
  };
  $.ajax({
    method: "POST",
    url: "/imagedb",
    data: data
  }).then(function(res){
    getPhotos();
  });
};
// ----------------------------------

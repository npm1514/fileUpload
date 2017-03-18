var getPhotos = function(){
  $.ajax({
    method: "GET",
    url: "/image"
  }).then(function(res){
    for (var i = 0; i < res.length; i++) {
      $('#imgs').append('<img src="'+res[i].url+'">')
    }
  });
};
getPhotos();
// -------------------------------
$('#uploadForm').on('submit', function(){
  $.ajax({
    method: "POST",
    url: "/image",
    data: new FormData($(this)[0]),
    contentType: false,
    processData: false,
    enctype: 'multipart/form-data'
  }).then(function(){
    getPhotos();
  });
});
// ----------------------------------

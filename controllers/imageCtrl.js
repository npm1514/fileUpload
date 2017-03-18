var ImageModel = require('./../imageModel.js');
// ------------------------
var multer = require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/images');
  },
  filename: function (req, file, callback) {
    var name = file.fieldname + '-' + Date.now();
    var image = new ImageModel({url: './images/'+name});
    image.save();//this is mongo, if you want Postgres, use image.create('./images/'+name)
    callback(null, name);
  }
});
var upload = multer({ storage : storage}).single('userPhoto');

module.exports = {
  create: function(req,res){
      upload(req,res,function(err) {
          if(err) {
              return res.end("Error uploading file.");
          }
          res.send();
      });
  },
  // ---------------------------
  read: function(req, res) {
    ImageModel
    .find(req.query)
    .exec(function (err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  getOne: function(req, res) {
    ImageModel
    .findById(req.params.id)
    .exec(function (err, result) {
      if (err) {
        return res.send(err);
      }
      res.send(result);
    });
  },
  update: function(req, res){
    ImageModel
    .findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  },
  delete: function(req, res){
    ImageModel
    .findByIdAndRemove(req.params.id, req.body, function(err, result){
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  }
};

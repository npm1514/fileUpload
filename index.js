var express   = require('express'),
bodyParser    = require('body-parser'),
cors          = require('cors'),
mongoose      = require('mongoose');

var imageCtrl = require('./controllers/imageCtrl');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.post('/image', imageCtrl.create);
app.post('/imagedb', imageCtrl.createDB);
app.get('/image', imageCtrl.read);
app.put('/image/:id', imageCtrl.update);
app.delete('/image/:id', imageCtrl.delete);

var mongoUri = "mongodb://localhost:27017/imageFileUpload";
mongoose.connect(mongoUri);
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

app.listen(8000, function(){
  console.log("listening to 8000");
});

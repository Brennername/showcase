
const express = require('express');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/showcase/browser'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/showcase/browser/index.html'));
});





// Middleware
app.use(cors());
app.use(express.json());

// Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets/artwork');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Endpoint to list artwork metadata
app.get('/api/v1/artwork', (req, res) => {
  // Replace this with actual metadata extraction logic
  const artwork = [
    {
      id: 1,
      name: 'Image 1',
      path: 'assets/artwork/green_bay_painting.jpeg'
    },
    {
      id: 2,
      name: 'Image 2',
      path: 'assets/artwork/nexen_dice.jpeg'
    }
  ];

  res.json(artwork);
});





const port = process.env.PORT || 4321;


// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

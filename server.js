const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const apiRoutes = require("./routes/apiRoutes");

const http = require("http");

const app = express();
const PORT = process.env.PORT || 3001;

const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project_3",
  {
    useMongoClient: true
  }
);

app.use("/api", apiRoutes);

app.get(function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
})

io.on("connection", socket => {
  console.log("New client connected");
  socket.on('join', data => {
    console.log(data);
    socket.emit("test", {'message': 'Hello Socket'})
  })
  socket.on('chat', msg => {
    io.emit('chat', msg)
    console.log(data)
  });
  socket.on("disconnect", () => console.log("Client disconnected"));

});


server.listen(PORT, function(){
  console.log(`server listening on port ${PORT}`);
});

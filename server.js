const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// 👇 THIS LINE IS SUPER IMPORTANT
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
});

http.listen(3000, () => {
  console.log("Server running on port 3000");
});

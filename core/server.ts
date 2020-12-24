import { Socket } from "dgram"

const net = require("net")
const sanitize = require("../core/lib/sanitize")

const netSocketServer = net.createServer((socket: Socket) => {
    socket.on("connect", handleConnectionRequest)
})


function handleConnectionRequest(socket: Socket) {
    socket.send(JSON.stringify({State: "Connected"}))
    return
}


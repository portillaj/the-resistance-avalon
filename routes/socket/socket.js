module.exports = io => {
    io.on("connection", socket => {
        console.log(`New Socket ID: ${socket}`)

        socket.on("disconnection", () => {
            console.log('Client Disconnected')
        })
    })
}
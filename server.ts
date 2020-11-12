import {Server, Socket} from 'socket.io'

const isProd = process.argv[2] === 'prod' || false
const io = new Server(3000, {
  cors: {origin: isProd ? 'http://localhost:8080' : 'http://localhost:4200'},
})

io.on('connect', (socket: Socket) => {
  console.log(`connect ${socket.id}`)

  socket.on('disconnect', () => {
    console.log(`disconnect ${socket.id}`)
  })
})

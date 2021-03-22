import express from 'express'
import { createServer, Server } from 'http'
import cors from 'cors'
import Routes from './routes/router'
import { Server as socketIo, Socket } from "socket.io" 
import env from '../../../config/index'

class App {
  public express: express.Application
  public server: Server
  public appRoutes: Routes = new Routes()
  private io: socketIo

  public constructor() {
      this.express = express()
      this.middlewares()
      this.appRoutes.routes(this.express)
      this.sockets() // inicia os serviços do websocket
      this.listen() // Inicia e realiza a leitura dos eventos do socket
  }

  private middlewares(): void {
      this.express.use(express.json())
      // this.express.use(cors())
  }

  private sockets(): void {
    this.server = createServer(this.express)  // criando o server
    this.io = new socketIo(this.server, {
      cors: {
        origin: "https://absolut-psy.vercel.app",
        methods: ["GET", "POST"],
        credentials: true
      }
    }) // inicializando o socket.
  }

  private listen(): void {
    this.io.on('connection', (socket: Socket) => { // ouve o evento de conexão, um novo socket para cada nova conexão realizada
        let userId = ''
        let username = ''

        socket.on('chat.user', (user) => { // Salvando usuário da sessão
          userId = user.id
          username = user.username
        })
      
        socket.on('chat.message', (msg) => {
          // quando é chamado o evento chat.message ele devolve a mensagem a todos os sockets ligados ao servidor
            this.io.emit('chat.message', msg)
        })

        socket.on('disconnect', (msg) => { // Encerrando conexão com o socket
            socket.emit('disconnected');
            this.io.emit('chat.message', {
              id: userId,
              username: username,
              message: `${username} saiu do chat.`
            })
        })
    })
  }
}

export default new App()

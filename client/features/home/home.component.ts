import {Component} from '@angular/core'
import {io, Socket} from 'socket.io-client'

@Component({selector: 'abs-home', template: `home component`})
export class HomeComponent {
  socket: Socket = io('http://localhost:3000')
}

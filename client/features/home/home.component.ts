import {Component} from '@angular/core'
import {io} from 'socket.io-client'

@Component({selector: 'abs-home', template: `home component`})
export class HomeComponent {
  socket = io('http://localhost:3000')
}

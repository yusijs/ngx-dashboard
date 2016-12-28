import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  private socket: SocketIOClient.Socket;

  getStats(): Observable<any> {
    return new Observable(observer => {

      this.socket = io('');

      this.socket.on('stats', data => {
        observer.next(data);
      })

      return () => {
        this.socket.disconnect();
      };

    })
  }

  constructor() { }

}

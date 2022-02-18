import { Component } from '@angular/core';
import { NgxAgoraService,ClientConfig } from 'ngx-agora';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agora';
  constructor(
    private agoraService: NgxAgoraService,
    private config : ClientConfig
  ){
    this.agoraService.createClient(this.config, true);
    // console.log(this.config)
    this.agoraService.client.join(null, '1000', null, (uid) => {});
  }
}


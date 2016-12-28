import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
  public stats: any[];
  public colors = { domain: ['#5AA454', '#A10A28']};
  public resolution = [700, 400];
  constructor(private _service: AppService) {
    this._service.getStats().subscribe(data => {
      this.stats = data;
    })
  }
}

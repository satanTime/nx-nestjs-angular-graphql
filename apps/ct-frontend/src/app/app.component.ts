import {Component} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'da-control-tower-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public readonly appService: AppService) {}
}

import {Component} from '@angular/core';

declare const VERSION: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Version: ' + VERSION;
}

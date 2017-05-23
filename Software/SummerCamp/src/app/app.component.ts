import { Component } from '@angular/core';
import {Services} from './services';
import { LocalStorageModule } from 'angular-2-local-storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Services]
})
export class AppComponent {
  title = 'app works!';
}

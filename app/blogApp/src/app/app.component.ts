import { Component } from '@angular/core';
import {ProductService} from './table/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})

export class AppComponent {
  title = 'iTexico';
}



import { Component } from '@angular/core';
import { SimpleCoreService } from 'simple-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'simple-demo';

  constructor(simpleService: SimpleCoreService) {
    
  }
}

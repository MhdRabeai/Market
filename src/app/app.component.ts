import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { toggleFade } from './toggle-fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [toggleFade],
})
export class AppComponent {
  title = 'myApp';

  constructor() {}
}

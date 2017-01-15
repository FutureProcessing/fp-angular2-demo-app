import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>
               {{title}}
            </h1> 
  <app-user-list></app-user-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FP DEMO APP!';
}

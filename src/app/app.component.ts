import { Component } from '@angular/core';
import { SomeService } from './some.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'ngles4';

  constructor(
    private someService: SomeService
  ) {
    console.log('AppComponent', this.someService);
  }
}

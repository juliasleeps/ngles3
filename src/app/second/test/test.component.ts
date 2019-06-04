import { Component, OnInit, Injector, Inject } from '@angular/core';
import { SomeService } from 'src/app/some.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private someService: SomeService,
    private injector: Injector,
    @Inject('MY SUPER SERVICE') private mySuperService: any
  ) {
    console.log('TestComponent', this.someService)
    console.log('TestComponent', this.mySuperService)
    // console.log('TestComponent', this.injector.get(SomeService))
  }

  ngOnInit() {
  }

}

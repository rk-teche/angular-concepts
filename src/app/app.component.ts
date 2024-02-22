import { Component, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-concepts';
  counter: number = 0;

  constructor(private store: Store<{counter : { counter: number }}>)
  {
    
  }

  ngOnInit()
  {
    this.store.select("counter").subscribe(data => {
      this.counter = data.counter;
    })
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
   
  }

}

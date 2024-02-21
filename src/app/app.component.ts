import { Component, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-concepts';
  counter: number;

  constructor(private store: Store<{counter : { counter: number }}>)
  {

  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    this.store.select("counter").subscribe(data => {
      this.counter = data.counter;
    })
  }

}

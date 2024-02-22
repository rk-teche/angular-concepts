import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './state-management/counter/counter-actions';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  constructor(private store: Store<{counter: {counter: 0}}>) { }

  ngOnInit(): void {
  }

  onIncrement()
  {
    this.store.dispatch(increment());
  }

  onDecrement()
  {
    this.store.dispatch(decrement());
  }

  onReset()
  {
    this.store.dispatch(reset());
  }

}

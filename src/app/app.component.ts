import { Component, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-concepts';

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

}

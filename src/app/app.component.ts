import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-concepts';
  employee = {
    organisation: 'codemaya',
    info: [
      {
        id: 1,
        name: 'Anit'
      },
      {
        id: 2,
        name: 'Ashutosh'
      },
      {
        id: 3,
        name: 'Tanmay'
      },
    ]
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }

  addition() : Number {
    // this.employee.info.reduce((a, b) => {
    //   console.log(a)
    //   return a.id + b.id
    // })
    console.log('', )
    return 0;
  }
}

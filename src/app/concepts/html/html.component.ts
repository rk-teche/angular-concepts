import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {
  @Input() employee : any = [];
  @Output() employeeChange = new EventEmitter();
  constructor() {
    
   }

  ngOnInit(): void {
    console.log('employee', this.employee)
    // const template = document.querySelector('#html-template');
    // if(template){
    //   const content = template.content.cloneNode(true)
    //   document.body.append(content)
    // }
  }

  updateInfo(){
    this.employee.info =  [...this.employee.info, {
     id: 4,
     name: 'rk'
    }]
  }

}

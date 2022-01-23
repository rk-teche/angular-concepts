import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const template = document.querySelector('#html-template');
    // if(template){
    //   const content = template.content.cloneNode(true)
    //   document.body.append(content)
    // }
  }

}

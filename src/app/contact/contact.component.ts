import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loggIt(subject, content, author){
 
    // const text= document.createTextNode('Yes');
    // content=document.getElementById("emailContent").appendChild(content);

    console.log(subject+content+author);
  }
}

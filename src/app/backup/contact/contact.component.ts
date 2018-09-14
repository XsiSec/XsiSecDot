import { Component, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Contact } from './contact';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name;
  email;
  message;
 
  constructor(Contact:Contact){

  }

    

  ngOnInit() {
  

    }
  
  processForm() {
  //const allInfo = `My name is ${this.Contact.name}. My email is ${this.Contact.email}. My message is ${this.Contact.message}`;alert(allInfo); 
  }


}

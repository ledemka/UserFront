import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/model/contact.model';
import { ContactService } from 'src/services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

    contact:Contact = new Contact();
    mode:number=1
  constructor(public contactServices: ContactService) { }

  ngOnInit() {
  }
  saveContact(){
    this.contactServices.saveContact(this.contact).subscribe(data => {
    this.mode=2})
    console.log(this.contact)
  }

}

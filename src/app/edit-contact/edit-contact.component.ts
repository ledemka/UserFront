import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/model/contact.model';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  mode:number = 1;
  contact:Contact = new Contact();
  idModif:number
  constructor(public actvatedRoute:ActivatedRoute,public contactService:ContactService) { 
    console.log(actvatedRoute.snapshot.params.id)
this.idModif = actvatedRoute.snapshot.params.id
  }

  ngOnInit() {
    return this.contactService.getContacts(this.idModif).subscribe((data) => {
      //pour recuperer les données et parsé dans le formulaire
     // this.contact = data;
    })
  }

}

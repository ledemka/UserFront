import { Component, OnInit, Injectable } from '@angular/core';
import { ContactService } from 'src/services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ContactsComponent implements OnInit {
  contactList = []
  motCle: string = "";
  is_key_search: boolean = false;
  pageCourante: number = 0;
  size: number = 5;
  pages: Array<number>;
  constructor(public contactServices: ContactService,public router:Router) {//il faut injecter le services

  }

  ngOnInit() {

  }

  doSearch() {
    if(this.motCle !== ""){
      this.is_key_search = true
    }
    return this.contactServices.getContact(this.motCle, this.pageCourante, this.size).subscribe((data: []) => {
      for (let i in data)
        this.contactList.push(data[i])
    })
  }

  chercher() {
    this.doSearch();
  }
  goToPage(i: number){
    this.pageCourante = i
    this.doSearch()
  }

  onEditContact(id:number){
    this.router.navigate(['edit-contact',id])
  }


}

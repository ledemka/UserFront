import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/model/contact.model';




@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {

  }
  getContact(motCle: string, pageCourante: number, size: number) {
    return this.http.get('http://localhost:8089/chercher?motCle=' + motCle + '&size=' + size + '&page=' + pageCourante)

  }

  getContacts(id: number) {
    return this.http.get('http://localhost:8089/contact/'+id)

  }

  saveContact(contact: Contact) {
    return this.http.post('http://localhost:8089/contact', contact)

  }


}
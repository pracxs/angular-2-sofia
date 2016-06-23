import {Component, OnInit} from '@angular/core'
import {ContactsService} from "./Contacts.service"

@Component({
    selector: 'contact-list',
    template: `
        <ul>
            <li *ngFor="let contact of contacts" class='item' [class.active]="contact==selected"> 
                <a href='#' (click)='select(contact)'>{{contact.firstName}} {{contact.lastName | uppercase}} </a>
                <a href='#' (click)='remove(contact)' class='remove' title='Remove'><span class='glyphicon glyphicon-remove-sign'></span></a>         
            </li>
        </ul>
    `
})
export class ContactListComponent implements OnInit {
    selected: Contact
    contacts: Contact[]

    constructor(private contactsService: ContactsService) {}

    select(contact: Contact) {
        this.selected = contact
    }

    remove(contact: Contact) {
        this.contactsService.remove(contact.id)
    }

    ngOnInit() {
        this.contacts = this.contactsService.getAll()
    }
}
import {Component, OnInit} from '@angular/core'
import {Person} from './person'
import {ContactsService} from './contact.service'

@Component({
    selector: 'person-list',
    template: `
        <ul>
            <li class='item' [class.active]="selected===person" *ngFor="let person of persons">
                <a href='#' (click)='select(person)'>{{person.firstName}} {{person.lastName}}</a>
                <a href='#' (click)='remove(person)' class='remove' title='Remove'>
                    <span class='glyphicon glyphicon-remove-sign'></span>
                </a>
            </li>
        </ul>
    `
})
export class PersonListComponent implements OnInit {
    persons: Person[]
    selected: Person
    
    constructor(private contactsService: ContactsService) {}
    
    select(person: Person) {
        this.selected = person
    }
    
    remove(person: Person) {
        this.contactsService.remove(person.id)
        if(this.selected===person)
            this.selected = null
    }
    
    ngOnInit() {
        this.persons = this.contactsService.getAll()
    }
}

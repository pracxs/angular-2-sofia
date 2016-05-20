import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core'
import {Person} from './person'
import {ContactsService} from './contact.service'
import {Observable} from 'rxjs/Rx'

@Component({
    selector: 'person-list',
    template: `
        <ul>
            <li class='item' [class.active]="selected===person" *ngFor="let person of persons">
                <a href='#' (click)='select(person)'>{{person.firstName}} {{person.lastName | uppercase}}</a>
                <a href='#' (click)='remove(person)' class='remove' title='Remove'>
                    <span class='glyphicon glyphicon-remove-sign'></span>
                </a>
            </li>
        </ul>
    `
})
export class PersonListComponent implements OnInit {
    persons: Person[]
    @Input()
    selected: Person
    @Output()
    selectedChange = new EventEmitter<Person>()
    
    constructor(private contactsService: ContactsService) {}
    
    select(person: Person) {
        this.selected = person
        this.selectedChange.emit(person)
    }
    
    remove(person: Person) {
        this.contactsService.remove(person.id)
        if(this.selected===person)
            this.selected = null
    }
    
    ngOnInit() {
        this.contactsService.getAll().subscribe( data => { 
            this.persons=data
        } )
    }
}

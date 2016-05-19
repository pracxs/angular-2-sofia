import {Component} from '@angular/core'
import {Person} from './person'

const CONTACTS: Person[] = [
				{ id: 1, firstName: "Max", lastName: "Smith", email: "max@gmail.com" },
				{ id: 2, firstName: "Chris", lastName: "Raches", email: "chris@gmail.com" },
				{ id: 3, firstName: "Michael", lastName: "Alloy", email: "michael@gmail.com" },
				{ id: 4, firstName: "John", lastName: "Doe", email: "john@gmail.com" },
				{ id: 5, firstName: "Jenny", lastName: "Doe", email: "jenny@gmail.com" }
			];
			

@Component({
    selector: 'person-list',
    template: `
        <ul>
            <li class='item' [class.active]="selected===person" *ngFor="let person of persons">
                <a href='#' (click)='select(person)'>{{person.firstName}} {{person.lastName}}</a>
                <a href='#' onclick='ctrl.remove(event, 0)' class='remove' title='Remove'>
                    <span class='glyphicon glyphicon-remove-sign'></span>
                </a>
            </li>
        </ul>
    `
})
export class PersonListComponent {
    persons: Person[] = CONTACTS
    selected: Person
    
    select(person: Person) {
        this.selected = person
    }
}

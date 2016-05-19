import {Component, Input} from '@angular/core'
import {Person} from './person'

@Component({
    selector: 'person-details',
    template: `
        <div id="contactsDetailsContainer" *ngIf="contact">
            <label>First Name: </label><b>{{contact?.firstName}}</b><br/>
            <label>Last Name: </label><b>{{contact?.lastName}}</b><br/>
            <label>email: </label><b>{{contact?.email}}</b><br/>
            
            <label></label>
            <a href="#" class="text-danger" (click)="edit()">
                <span class="glyphicon glyphicon-edit"></span>
                Edit
            </a>
        </div>
    `
})
export class PersonDetailsComponent {
    @Input()
    contact: Person
}

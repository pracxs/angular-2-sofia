import {Component, Input, OnChanges} from '@angular/core'
import {Person} from './person'

@Component({
    selector: 'person-details',
    template: `
        <div id="contactsDetailsContainer" *ngIf="contact">
            <span *ngIf="!showEdit">
                <label>First Name: </label><b>{{contact?.firstName}}</b><br/>
                <label>Last Name: </label><b>{{contact?.lastName}}</b><br/>
                <label>email: </label><b>{{contact?.email}}</b><br/>
                
                <label></label>
                <a href="#" class="text-danger" (click)="showEdit=true">
                    <span class="glyphicon glyphicon-edit"></span>
                    Edit
                </a>
            </span>
            
            <form name="editContactForm" onsubmit="ctrl.submit(event)" *ngIf="showEdit">
                <input name="id" type="hidden" value="{{contact.id}}">
                <label>First Name: </label><input name="firstName" value="{{contact.firstName}}"><br/>
                <label>Last Name: </label><input name="lastName" value="{{contact.lastName}}"><br/>
                <label>email: </label><input name="email" value="{{contact.email}}"><br/>
                <label></label><input type="submit" class="btn btn-danger" value="{{( !contactId ? 'Add' : 'Save' )}}"/>
                <a href="#" class="text-danger" (click)="showEdit=false">Cancel</a>
            </form>
        </div>
    `
})
export class PersonDetailsComponent implements OnChanges {
    @Input()
    contact: Person
    showEdit = false
    
    ngOnChanges(changes) {
        if( changes.contact )
            this.showEdit = false
    }
}

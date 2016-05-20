import {Component, Input, OnChanges} from '@angular/core'
import {Person} from './person'
import {ContactsService} from './contact.service'

@Component({
    selector: 'person-details',
    template: `
        <div id="contactsDetailsContainer" *ngIf="contact">
            <span *ngIf="!showEdit">
                <label>First Name: </label><b>{{contact?.firstName}}</b><br/>
                <label>Last Name: </label><b>{{contact?.lastName}}</b><br/>
                <label>email: </label><b>{{contact?.email}}</b><br/>
                
                <label></label>
                <a href="#" class="text-danger" (click)="onEdit()">
                    <span class="glyphicon glyphicon-edit"></span>
                    Edit
                </a>
            </span>
            
            <form name="editContactForm" (ngSubmit)="submit()" *ngIf="showEdit">
                <label>First Name: </label><input name="firstName" [(ngModel)]="edited.firstName"><br/>
                <label>Last Name: </label><input name="lastName" [(ngModel)]="edited.lastName"><br/>
                <label>email: </label><input name="email" [(ngModel)]="edited.email"><br/>
                <label></label><input type="submit" class="btn btn-danger" value="{{( !contact.id ? 'Add' : 'Save' )}}"/>
                <a href="#" class="text-danger" (click)="onCancel()">Cancel</a>
            </form>
        </div>
    `
})
export class PersonDetailsComponent implements OnChanges {
    @Input()
    contact: Person
    edited: Person
    showEdit = false
    
    constructor(private contactsService: ContactsService) {}
    
    ngOnChanges(changes) {
        if( changes.contact )
            this.showEdit = ( this.contact && this.contact.id === null )
    }
    
    onCancel() {
        this.showEdit = false
        if( this.contact.id === null ) {
            this.contact = null;
        }
    }
    
    onEdit() {
        this.showEdit = true
        
        this.edited = Object.assign({}, this.contact)
    }
    
    submit() {
        // validation
        this.contactsService.update(this.edited)
        this.showEdit = false
    }
}

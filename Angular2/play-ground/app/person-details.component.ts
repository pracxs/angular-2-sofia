import {Component, Input, Output, OnChanges, EventEmitter} from '@angular/core'
import {NgForm} from '@angular/common'
import {Person} from './person'
import {ContactsService} from './contact.service'
import {EmailValidator} from './email-validator.directive'

@Component({
    selector: 'person-details',
    directives: [EmailValidator],
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
            
            <form name="editContactForm" #form="ngForm" (ngSubmit)="submit(form)" *ngIf="showEdit" novalidate>
                <label>First Name: </label><input name="firstName" [ngModel]="contact.firstName" ngControl="firstName" required><br/>
                <div class="alert alert-danger" role="alert" 
                    *ngIf="!form.controls.firstName?.pristine && !form?.controls.firstName?.valid">
                    First name is required    
                </div>
                
                <label>Last Name: </label><input name="lastName" [ngModel]="contact.lastName" ngControl="lastName" required><br/>
                <div class="alert alert-danger" role="alert" 
                    *ngIf="!form.controls.lastName?.pristine && !form?.controls.lastName?.valid">
                    First name is required    
                </div>
                
                <label>email: </label><input name="email" [ngModel]="contact.email" ngControl="email" email><br/>
                <div class="alert alert-danger" role="alert" *ngIf="!form.controls.email?.valid">
                    Email is invalid
                </div>
                
                <label></label><input type="submit" class="btn btn-danger" value="{{( !contact.id ? 'Add' : 'Save' )}}"/>
                <a href="#" class="text-danger" (click)="onCancel()">Cancel</a>
            </form>
        </div>
    `
})
export class PersonDetailsComponent implements OnChanges {
    @Input()
    contact: Person
    @Output()
    contactChange = new EventEmitter<Person>()
   
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
    }
    
    submit(form: NgForm) {
        if( ! form.valid )
           return
           
        // validation
        form.value.id = this.contact.id
        
        this.contactsService.update(form.value)
        this.showEdit = false
        this.contactChange.emit(form.value)
    }
}

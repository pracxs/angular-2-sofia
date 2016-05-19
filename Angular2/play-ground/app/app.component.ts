import {Component} from '@angular/core'
import {PersonListComponent} from './person-list.component'
import {PersonDetailsComponent} from './person-details.component'
import {ContactsService} from './contact.service'
import {Person} from './person'

@Component({
    selector: 'my-app',
    directives: [PersonListComponent, PersonDetailsComponent],
    providers: [ContactsService],
    template: `
        <person-list [(selected)]="selected"></person-list>
        
        <a id="add" href="#" class="text-danger" (click)="onAdd()"><span class="glyphicon glyphicon-plus"></span>Add</a>
        
        <person-details [contact]="selected"></person-details>
    `
})
export class AppComponent {
    selected: Person
    
    onAdd() {
        this.selected = null
    }
}

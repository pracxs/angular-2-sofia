import {Component} from '@angular/core'
import {PersonListComponent} from './person-list.component'
import {PersonDetailsComponent} from './person-details.component'
import {ContactsService} from './contact.service'

@Component({
    selector: 'my-app',
    directives: [PersonListComponent, PersonDetailsComponent],
    providers: [ContactsService],
    template: `
        <person-list #list></person-list>
        <person-details [contact]="list.selected"></person-details>
    `
})
export class AppComponent {}

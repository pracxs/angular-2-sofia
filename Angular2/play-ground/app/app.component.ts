import {Component} from '@angular/core'
import {ContactsService} from "./Contacts.service"
import {ContactListComponent} from "./contact-list.component"

@Component({
    selector: 'my-app',
    directives: [ContactListComponent],
    providers: [ContactsService],
    template: `
        <contact-list></contact-list>
    `
})
export class AppComponent {}
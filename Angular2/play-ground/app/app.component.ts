import {Component} from '@angular/core'
import {PersonListComponent} from './person-list.component'
import {PersonDetailsComponent} from './person-details.component'

@Component({
    selector: 'my-app',
    directives: [PersonListComponent, PersonDetailsComponent],
    template: `
        <person-list #list></person-list>
        <person-details [contact]="list.selected"></person-details>
    `
})
export class AppComponent {}

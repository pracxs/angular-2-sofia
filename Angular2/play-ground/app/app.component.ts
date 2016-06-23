import {Component} from '@angular/core'

@Component({
    selector: 'my-app',
    template: `
        <ul>
            <li *ngFor="let person of names">{{person}}</li>
        </ul>
    `
})
export class AppComponent {
    names: string[] = ['Peter', 'Ivan', 'Georg']
}
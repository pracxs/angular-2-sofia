import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {provide} from '@angular/core'
import {HashLocationStrategy, LocationStrategy} from '@angular/common'

import {AppComponent} from './app.component';


// bootstrap(AppComponent, [ROUTER_PROVIDERS]);
bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
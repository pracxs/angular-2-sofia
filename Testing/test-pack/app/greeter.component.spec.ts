import {provide} from '@angular/core'
import {describe,expect,it,xit, inject, beforeEach, beforeEachProviders, setBaseTestProviders, getTestInjector} from '@angular/core/testing'
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing'
import {TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS} from '@angular/platform-browser-dynamic/testing'
import {GreeterComponent} from './greeter.component'

describe('GreeterComponent', () => {
    if( !getTestInjector().platformProviders.length )
        setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS)
    
    beforeEachProviders(() => [TestComponentBuilder])

    it('must be "Phone Book App"', 
        inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb.createAsync(GreeterComponent)
                .then((fixture: ComponentFixture<GreeterComponent>) => {
                    let element = fixture.nativeElement

                    fixture.detectChanges()

                    expect(element.querySelectorAll('h1').length).toBe(1);
                    expect(element.querySelector('h1').innerText).toBe('Phone Book App');
                })
        })
    )   
})
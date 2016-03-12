import {
    describe,
    expect,
    beforeEach,
    it,
    inject,
    injectAsync,
    beforeEachProviders,
    TestComponentBuilder,
    ComponentFixture,
    fakeAsync,
    tick
} from 'angular2/testing';

import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS}
from 'angular2/platform/testing/browser';

import {Observable} from 'rxjs/Observable';

import {DraggableComponent} from '../src/dnd.draggable';
import {DragDropService} from '../src/dnd.service';

export function main() {
    describe('Drag and Drop', () => {

        let componentFixture: ComponentFixture;
        let dragdropService: DragDropService;
        
        let draggableData:any = {
            
        };

        beforeEachProviders(() => {
            return [TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS, DragDropService];
        });

        beforeEach(injectAsync([TestComponentBuilder, DragDropService], (tcb: TestComponentBuilder, dd: DragDropService) => {
            dragdropService = dd;
            return tcb.createAsync(DraggableComponent).then((cf: ComponentFixture) => {
                componentFixture = cf;
                componentFixture.componentInstance.draggableData = draggableData;
                componentFixture.detectChanges();
            });
        }));

        it('should be defined', () => {
            // expect(componentFixture).toBeDefined();
        });
    });
}
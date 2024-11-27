import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabEventPage } from './tab-event.page';

describe('TabEventPage', () => {
  let component: TabEventPage;
  let fixture: ComponentFixture<TabEventPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

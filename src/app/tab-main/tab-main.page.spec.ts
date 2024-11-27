import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabMainPage } from './tab-main.page';

describe('TabMainPage', () => {
  let component: TabMainPage;
  let fixture: ComponentFixture<TabMainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

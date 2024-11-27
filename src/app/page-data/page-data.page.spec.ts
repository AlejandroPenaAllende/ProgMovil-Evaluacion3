import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDataPage } from './page-data.page';

describe('PageDataPage', () => {
  let component: PageDataPage;
  let fixture: ComponentFixture<PageDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

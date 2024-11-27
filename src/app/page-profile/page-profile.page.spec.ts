import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageProfilePage } from './page-profile.page';

describe('PageProfilePage', () => {
  let component: PageProfilePage;
  let fixture: ComponentFixture<PageProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

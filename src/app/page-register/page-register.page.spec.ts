import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageRegisterPage } from './page-register.page';

describe('PageRegisterPage', () => {
  let component: PageRegisterPage;
  let fixture: ComponentFixture<PageRegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

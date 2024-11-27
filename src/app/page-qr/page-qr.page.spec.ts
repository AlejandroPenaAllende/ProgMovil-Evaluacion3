import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageQrPage } from './page-qr.page';

describe('PageQrPage', () => {
  let component: PageQrPage;
  let fixture: ComponentFixture<PageQrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDetail2Page } from './page-detail2.page';

describe('PageDetail2Page', () => {
  let component: PageDetail2Page;
  let fixture: ComponentFixture<PageDetail2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetail2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

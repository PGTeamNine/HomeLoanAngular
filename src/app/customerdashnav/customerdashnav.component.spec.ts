import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdashnavComponent } from './customerdashnav.component';

describe('CustomerdashnavComponent', () => {
  let component: CustomerdashnavComponent;
  let fixture: ComponentFixture<CustomerdashnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdashnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerdashnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

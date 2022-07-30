import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplynewComponent } from './applynew.component';

describe('ApplynewComponent', () => {
  let component: ApplynewComponent;
  let fixture: ComponentFixture<ApplynewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplynewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplynewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

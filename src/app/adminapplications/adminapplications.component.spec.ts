import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminapplicationsComponent } from './adminapplications.component';

describe('AdminapplicationsComponent', () => {
  let component: AdminapplicationsComponent;
  let fixture: ComponentFixture<AdminapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminapplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

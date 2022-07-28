import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoapplyComponent } from './howtoapply.component';

describe('HowtoapplyComponent', () => {
  let component: HowtoapplyComponent;
  let fixture: ComponentFixture<HowtoapplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtoapplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowtoapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoapplydashboardComponent } from './howtoapplydashboard.component';

describe('HowtoapplydashboardComponent', () => {
  let component: HowtoapplydashboardComponent;
  let fixture: ComponentFixture<HowtoapplydashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtoapplydashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowtoapplydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

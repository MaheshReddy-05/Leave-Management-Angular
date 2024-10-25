import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveactionssummaryComponent } from './leaveactionssummary.component';

describe('LeaveactionssummaryComponent', () => {
  let component: LeaveactionssummaryComponent;
  let fixture: ComponentFixture<LeaveactionssummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveactionssummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveactionssummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

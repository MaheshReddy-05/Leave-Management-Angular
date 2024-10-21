import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavecardComponent } from './leavecard.component';

describe('LeavecardComponent', () => {
  let component: LeavecardComponent;
  let fixture: ComponentFixture<LeavecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeavecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

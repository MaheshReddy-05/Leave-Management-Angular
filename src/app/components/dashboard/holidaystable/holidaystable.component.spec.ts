import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaystableComponent } from './holidaystable.component';

describe('HolidaystableComponent', () => {
  let component: HolidaystableComponent;
  let fixture: ComponentFixture<HolidaystableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolidaystableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidaystableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

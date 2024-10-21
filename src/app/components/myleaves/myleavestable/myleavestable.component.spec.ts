import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyleavestableComponent } from './myleavestable.component';

describe('MyleavestableComponent', () => {
  let component: MyleavestableComponent;
  let fixture: ComponentFixture<MyleavestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyleavestableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyleavestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

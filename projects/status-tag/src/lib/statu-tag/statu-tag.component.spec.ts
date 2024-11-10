import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuTagComponent } from './statu-tag.component';

describe('StatuTagComponent', () => {
  let component: StatuTagComponent;
  let fixture: ComponentFixture<StatuTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatuTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatuTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentmyleavesComponent } from './recentmyleaves.component';

describe('RecentmyleavesComponent', () => {
  let component: RecentmyleavesComponent;
  let fixture: ComponentFixture<RecentmyleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentmyleavesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentmyleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyteamsummaryComponent } from './myteamsummary.component';

describe('MyteamsummaryComponent', () => {
  let component: MyteamsummaryComponent;
  let fixture: ComponentFixture<MyteamsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyteamsummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyteamsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

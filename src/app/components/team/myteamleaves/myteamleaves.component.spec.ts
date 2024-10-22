import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyteamleavesComponent } from './myteamleaves.component';

describe('MyteamleavesComponent', () => {
  let component: MyteamleavesComponent;
  let fixture: ComponentFixture<MyteamleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyteamleavesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyteamleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

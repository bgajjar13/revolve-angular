import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MynotificationsComponent } from './mynotifications.component';

describe('MynotificationsComponent', () => {
  let component: MynotificationsComponent;
  let fixture: ComponentFixture<MynotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MynotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MynotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

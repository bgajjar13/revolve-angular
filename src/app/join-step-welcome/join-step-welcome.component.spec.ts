import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinStepWelcomeComponent } from './join-step-welcome.component';

describe('JoinStepWelcomeComponent', () => {
  let component: JoinStepWelcomeComponent;
  let fixture: ComponentFixture<JoinStepWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinStepWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinStepWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

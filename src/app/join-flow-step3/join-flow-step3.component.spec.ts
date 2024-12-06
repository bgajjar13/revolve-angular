import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinFlowStep3Component } from './join-flow-step3.component';

describe('JoinFlowStep3Component', () => {
  let component: JoinFlowStep3Component;
  let fixture: ComponentFixture<JoinFlowStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinFlowStep3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinFlowStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

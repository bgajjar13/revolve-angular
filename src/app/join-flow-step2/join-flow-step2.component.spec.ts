import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinFlowStep2Component } from './join-flow-step2.component';

describe('JoinFlowStep2Component', () => {
  let component: JoinFlowStep2Component;
  let fixture: ComponentFixture<JoinFlowStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinFlowStep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinFlowStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

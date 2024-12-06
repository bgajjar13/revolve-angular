import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinFlowStep1Component } from './join-flow-step1.component';

describe('JoinFlowStep1Component', () => {
  let component: JoinFlowStep1Component;
  let fixture: ComponentFixture<JoinFlowStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinFlowStep1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinFlowStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

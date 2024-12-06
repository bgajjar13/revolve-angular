import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForogotPasswordComponent } from './forogot-password.component';

describe('ForogotPasswordComponent', () => {
  let component: ForogotPasswordComponent;
  let fixture: ComponentFixture<ForogotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForogotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForogotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

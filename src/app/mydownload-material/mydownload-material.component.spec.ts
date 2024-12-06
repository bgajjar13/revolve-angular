import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydownloadMaterialComponent } from './mydownload-material.component';

describe('MydownloadMaterialComponent', () => {
  let component: MydownloadMaterialComponent;
  let fixture: ComponentFixture<MydownloadMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydownloadMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydownloadMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

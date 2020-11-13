import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeredianSelectComponent } from './meredian-select.component';

describe('MeredianSelectComponent', () => {
  let component: MeredianSelectComponent;
  let fixture: ComponentFixture<MeredianSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeredianSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeredianSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

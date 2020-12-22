import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByolChartComponent } from './byol-chart.component';

describe('ByolChartComponent', () => {
  let component: ByolChartComponent;
  let fixture: ComponentFixture<ByolChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByolChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByolChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

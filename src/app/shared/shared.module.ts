import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DrawPointService } from './services/draw-point/draw-point.service';
import { DownloadChartService } from './services/download-chart/download-chart.service';
import { MeredianSelectComponent } from './components/meredian-select/meredian-select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MeredianSelectComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,     
  ],
  exports:[
    MeredianSelectComponent,
    NgSelectModule,
    FormsModule, 
  ],
  providers: [DrawPointService, DownloadChartService]
})
export class SharedModule { }

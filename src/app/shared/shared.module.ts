import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DrawPointService } from './services/draw-point/draw-point.service';
import { DownloadChartService } from './services/download-chart/download-chart.service';
import { MeredianSelectComponent } from './components/meredian-select/meredian-select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ManualPlotingComponent } from './components/manual-ploting/manual-ploting.component';



@NgModule({
  declarations: [MeredianSelectComponent, ManualPlotingComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,     
  ],
  exports:[
    MeredianSelectComponent,
    ManualPlotingComponent,
    NgSelectModule,
    FormsModule, 
  ],
  providers: [DrawPointService, DownloadChartService]
})
export class SharedModule { }

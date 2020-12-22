import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DrawPointService } from './services/draw-point/draw-point.service';
import { DownloadChartService } from './services/download-chart/download-chart.service';
import { MeredianSelectComponent } from './components/meredian-select/meredian-select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManualPlotingComponent } from './components/manual-ploting/manual-ploting.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PatientFollowupFormComponent } from './components/patient-followup-form/patient-followup-form.component';
import { FormErrorService } from './services/form-error/form-error.service';
import { PatientStateService } from './services/patient-state/patient-state.service';



@NgModule({
  declarations: [MeredianSelectComponent, ManualPlotingComponent, PatientFollowupFormComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule, 
    PopoverModule,
    ReactiveFormsModule 
  ],
  exports:[
    MeredianSelectComponent,
    ManualPlotingComponent,
    PatientFollowupFormComponent,
    NgSelectModule,
    FormsModule,  
    ReactiveFormsModule
  ],
  providers: [DrawPointService, DownloadChartService, FormErrorService, PatientStateService]
})
export class SharedModule { }

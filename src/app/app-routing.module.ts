import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientFollowupFormComponent } from './shared/components/patient-followup-form/patient-followup-form.component';
import { PaitentDataGuard } from './treatment/guards/patient-data.guard';
import { TreatmentComponent } from './treatment/treatment.component';
 

const routes: Routes = [
  {path: '', component: PatientFollowupFormComponent},
  {path: 'treatment', component: TreatmentComponent, 
  canActivate:[PaitentDataGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

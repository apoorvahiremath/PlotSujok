import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ByolChartComponent } from './treatment/components/byol-chart/byol-chart.component';
import { FormsModule } from '@angular/forms'; 
import { DatePipe } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PopoverModule} from 'ngx-bootstrap/popover';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { TreatmentComponent } from './treatment/treatment.component';
import { PaitentDataGuard } from './treatment/guards/patient-data.guard';
@NgModule({
  declarations: [
    AppComponent,
    ByolChartComponent,
    HeaderComponent,
    FooterComponent,
    TreatmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    PopoverModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [DatePipe, PaitentDataGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

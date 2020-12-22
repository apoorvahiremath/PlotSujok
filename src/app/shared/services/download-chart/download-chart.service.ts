import { Injectable } from '@angular/core';
import domtoimage from 'dom-to-image';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DownloadChartService {
  dateFormat;

  constructor(private datePipe: DatePipe,) { 
    this.dateFormat = (date) =>
    this.datePipe.transform(date, 'dd-MM-yyyy');
  }


  downloadImageChart(chartCanvasId: string, name: string, chartType: string) {
    domtoimage.toJpeg(document.getElementById(chartCanvasId), { quality: 0.95 })
    .then((dataUrl) =>{
        var me = this;
        var link = document.createElement('a');
        link.download = name + '-' + chartType + '-' + me.dateFormat(new Date()) + '.jpeg';
        link.href = dataUrl;
        link.click();
    });
  }
}

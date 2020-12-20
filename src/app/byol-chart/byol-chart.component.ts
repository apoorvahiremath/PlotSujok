import { Component, OnInit } from '@angular/core';
import { DownloadChartService } from '../shared/services/download-chart/download-chart.service';
import { DrawPointService } from '../shared/services/draw-point/draw-point.service';
import { Sizes } from '../shared/enums/sizes.enum'
import { Color } from '../shared/enums/color.enum'
import { Shape } from '../shared/enums/shape.enum' 
import { SelectedPoint } from '../shared/models/selected-point.model';

@Component({
  selector: 'byol-chart',
  templateUrl: './byol-chart.component.html',
  styleUrls: ['./byol-chart.component.scss']
})
export class ByolChartComponent implements OnInit { 
  ctx;
  canvas; 

 
  selectedPoints: SelectedPoint[] = [];

  selectedPointer =  null;
  pointerSize = null;
  Sizes = Sizes;
  Color = Color;
  Shape = Shape;

  chartCanvasId = 'canvas'
  constructor(
    private drawPointService: DrawPointService,
    private downloadChartService: DownloadChartService
    ){ }

  ngOnInit() {
    this.initCanvas();   
  }

  initCanvas(){ 
    this.canvas = <HTMLCanvasElement>document.getElementById(this.chartCanvasId); 
    this.ctx = this.canvas.getContext("2d");  
  }
 

  putImage() {
    this.downloadChartService.downloadImageChart(this.chartCanvasId);
  }
  

  clearPoints(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.selectedPoints = []; 

  }

  setPointer(event){
    if(event){
      this.selectedPointer = event.pointer;
      this.pointerSize = event.size;
    }
  }

  clearPointer(){
    this.selectedPointer = null;
    this.pointerSize = null;
  }

  plotPointManually(event){
    if(!this.selectedPointer)
      return;
    const x = event.offsetX;
    const y = event.offsetY;
    let color, shape, size = this.pointerSize;
    switch (this.selectedPointer){
      case 'S':
        color = Color.Blue;
        shape = Shape.Circle;
        break;
      case 'T':
        color = Color.Red;
        shape = Shape.Circle; 
        break;
      case 'M':
        color = Color.Blue;
        shape = Shape.Square; 
        break;

    }
    this.selectedPoints.push({x, y, color, size, shape});
    this.drawPointService.drawCoordinates(this.ctx, x, y, color, shape, size);


  }
 
  selectPoint(event){ 
    if(event){
      this.selectedPoints.push(event);
      this.drawPointService.drawCoordinates(this.ctx, event.x, event.y,  event.color,  event.shape,  event.size);
    }
  }

  removePoint(event){ 
    if(event){
      this.selectedPoints = this.selectedPoints.filter(point =>{
        return (point.x !== event.x && point.y !== event.y)
      });
      this.redrawSelectedPoints();
    }
  }

  redrawSelectedPoints(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if(this.selectedPoints && this.selectedPoints.length > 0){
      this.selectedPoints.forEach(point =>{
        this.drawPointService.drawCoordinates(this.ctx, point.x, point.y, point.color, point.shape, point.size);
      })
    }
  }
}

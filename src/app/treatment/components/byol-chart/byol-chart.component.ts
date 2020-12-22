import { Component, OnInit } from '@angular/core';
import { DownloadChartService } from '../../../shared/services/download-chart/download-chart.service';
import { DrawPointService } from '../../../shared/services/draw-point/draw-point.service';
import { Sizes } from '../../../shared/enums/sizes.enum'
import { Color } from '../../../shared/enums/color.enum'
import { Shape } from '../../../shared/enums/shape.enum' 
import { SelectedPoint } from '../../../shared/models/selected-point.model';
import { ToastrService } from 'ngx-toastr';
import { PatientStateService } from '../../../shared/services/patient-state/patient-state.service';

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
  followupPatient;
  
  count = 1;
  allowSetSequence = false;


  constructor(
    private drawPointService: DrawPointService,
    private downloadChartService: DownloadChartService,
    private toastr: ToastrService,
    private patientStateService: PatientStateService
    ){ }

  ngOnInit() {
    this.initCanvas(); 
    this.followupPatient = this.patientStateService.followupPatientSubject.value;   
    this.addPatientDetailsToCanvas();  
  }

  //****************************** Initialize component ********************* */
  // Initializes the Canvas
  initCanvas(){ 
    this.canvas = <HTMLCanvasElement>document.getElementById(this.chartCanvasId); 
    this.ctx = this.canvas.getContext("2d");  
  }
 
  // Adds Patient details to Canvas form fields
  addPatientDetailsToCanvas(){
    // this.ctx.translate(100,100);  
    // this.ctx.save(); 
    this.allowSetSequence = false;
    if(this.followupPatient){
      this.ctx.rotate(Math.PI);  
      this.ctx.font = "18px Comic Sans MS";
      this.ctx.fillStyle = "red"; 
      this.ctx.fillText(this.followupPatient.name, -1130, -785); 
      this.ctx.fillText(this.followupPatient.prc, -436, -785); 
      this.ctx.fillText(this.followupPatient.date, -201, -785); 
      this.ctx.rotate(Math.PI);  
      this.ctx.restore();
    }
    
  }
  //***************************************************************************** */


  //******************** Handle events from Meredian Component********************* */
  // Set selected point on graph
  selectPoint(event){ 
    if(event){
      if(this.pointExists(event)){
        this.toastr.error(event.name + ' is already selected');
        return;
      }
      this.selectedPoints.push(event);
      this.drawPointService.drawCoordinates(this.ctx, event.x, event.y,  event.color,  event.shape,  event.size);
    }
  }

  // This is utility fuction to check if point is already added in protocol
  pointExists(newPoint){
    let pt = this.selectedPoints.find(point =>{
      return (newPoint.x == point.x && newPoint.y == point.y)
    });
    return pt ? true: false;
  }

  // Removes the selected from protocol and graph
  removePoint(event){  
    if(event){
      this.selectedPoints = this.selectedPoints.filter(point =>{
        return !(point.x == event.x && point.y == event.y)
      }); 
      
      this.redrawSelectedPoints();
    }
  }

  // Utility fuction to redraw point when point is removed from the protocol
  redrawSelectedPoints(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addPatientDetailsToCanvas();
    if(this.selectedPoints && this.selectedPoints.length > 0){
      this.selectedPoints.forEach(point =>{
        this.drawPointService.drawCoordinates(this.ctx, point.x, point.y, point.color, point.shape, point.size);
      })
    }
  }

  //***************************************************************************** */


  //******************** Handle events from Meredian Component********************* */
  // Fuction that takes event from Manual Pointer, set the poiter shape and size
  setPointer(event){
    if(event){
      this.allowSetSequence = false;
      this.selectedPointer = event.pointer;
      this.pointerSize = event.size;
    }
  }

  // Fuction clears the Pointer params
  clearPointer(){
    this.selectedPointer = null;
    this.pointerSize = null;
  }

  // This functions catches the event from Canvas and draws pointer on Canvas
  // This functions also handles Sequence drawing functionality
  plotPointManually(event){
    if(this.allowSetSequence){
      this.clearPointer();
      const x = event.offsetX;
      const y = event.offsetY;
      this.drawPointService.drawPointSequence(this.ctx, x, y, this.count)
      this.count++;
    }else{
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
  }

  allowSetSequenceSet(){
    this.allowSetSequence = true;
    this.clearPointer();
  }
  

  //***************************************************************************** */
  

  //*********************************Buttons*********************************** */
  // Function downloads the image
  putImage() {
    this.downloadChartService.downloadImageChart(this.chartCanvasId, this.followupPatient.name, 'LeftTMC');
  }
  
  // Function clears the complete canvas and selected protocol
  clearPoints(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.selectedPoints = []; 
    this.count = 1;
    this.clearPointer();
    this.addPatientDetailsToCanvas();
  }
  
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tcmLeftMeredian } from '../../data/tcm-left';
import { Sizes } from '../../enums/sizes.enum'
import { Color } from '../../enums/color.enum'
import { Shape } from '../../enums/shape.enum' 
@Component({
  selector: 'meredian-select',
  templateUrl: './meredian-select.component.html',
  styleUrls: ['./meredian-select.component.scss']
})
export class MeredianSelectComponent implements OnInit {
  points = tcmLeftMeredian;

  @Output()
  pointAdded = new EventEmitter(); 
   
  Sizes = Sizes;
  Color = Color;
  Shape = Shape;
  
  meredianList = [
    { name :'Lu', color: 'brown'},
    { name :'P', color: 'orange'},
    { name :'H', color: 'red'},
    { name :'Liv', color: 'green'},
    { name :'Sp', color: '#ffd100'},
    { name :'K', color: 'black'},
    { name :'Cv', color: 'darkgray'},
    { name :'Li', color: 'brown'},
    { name :'Tw', color: 'orange'},
    { name :'Si', color: 'red'},
    { name :'St', color: '#ffd100'},
    { name :'GB', color: 'green'},
    { name :'UB', color: 'black'},
    { name :'GV', color: 'lightgray'},
   ];

   methodList = [
    { color: Color.Blue, size: Sizes.MEDIUM, shape: Shape.Circle},
    { color: Color.Red, size: Sizes.MEDIUM, shape: Shape.Circle},
    { color: Color.Blue, size: Sizes.MEDIUM, shape: Shape.Square},
   ];

   selectedMeredian;
   selectedMeredianPoints = []; 
   selectedPoint;

  constructor() { }

  ngOnInit(): void {
  }  

  selectMeredian(meredian){
    this.selectedMeredian = meredian;
    this.selectedMeredianPoints = this.points.filter((point)=> point.meridian === meredian.name);
  }

  clearMeredian(){
    this.selectedMeredian = undefined;
    this.selectedMeredianPoints = [];
    this.selectedPoint = undefined;
  }

  setPoint(point){ 
    this.selectedPoint = point;
  }

  setMethod(method){
    if(this.selectedPoint){
      const size = method.shape === Shape.Square? Sizes.METHI: Sizes.VERYSMALL;
      this.selectPoint(this.selectedPoint, method.color, method.shape, size);
      this.selectedPoint = undefined;
    }
  } 

  selectPoint(event, color, shape, size){  
    if(event){
      this.pointAdded.emit({...event, color, shape, size}); 
    } 
  }
}

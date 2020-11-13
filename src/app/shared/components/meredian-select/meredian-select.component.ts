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
  selectedSPoints: any[];
  selectedTPoints: any[];
  selectedMPoints: any[];
  
  Sizes = Sizes;
  Color = Color;
  Shape = Shape;

  @Output()
  pointAdded = new EventEmitter()

  @Output()
  pointRemoved = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  selectPoint(event, color, shape, size){ 
    if(event){
      this.pointAdded.emit({...event, color, shape, size}); 
    }
  }

  removePoint(event){  
    if(event && event.value){
      this.pointRemoved.emit(event.value);  
    }
  }
}

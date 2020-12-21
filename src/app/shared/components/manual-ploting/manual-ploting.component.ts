import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Color } from '../../enums/color.enum';
import { Shape } from '../../enums/shape.enum';
import { Sizes } from '../../enums/sizes.enum';

@Component({
  selector: 'manual-ploting',
  templateUrl: './manual-ploting.component.html',
  styleUrls: ['./manual-ploting.component.scss']
})
export class ManualPlotingComponent implements OnInit {
  selectedPointer =  null;
  pointerSize = null;

  Sizes = Sizes;
  Color = Color;
  Shape = Shape;
  
  @Output()
  setPointerStyle = new EventEmitter();

  @Output()
  clearPointerStyle = new EventEmitter();

  pointerList = [
    { type: 'S', size: Sizes.VERYSMALL, color: Color.Blue, shape: Shape.Circle},
    { type: 'S', size: Sizes.SMALL, color: Color.Blue, shape: Shape.Circle},
    { type: 'S', size: Sizes.MEDIUM, color: Color.Blue, shape: Shape.Circle},
    { type: 'T', size: Sizes.VERYSMALL, color: Color.Red, shape: Shape.Circle},
    { type: 'T', size: Sizes.SMALL, color: Color.Red, shape: Shape.Circle},
    { type: 'T', size: Sizes.MEDIUM, color: Color.Red, shape: Shape.Circle},
    { type: 'M', size: Sizes.MEDIUM, color: Color.Blue, shape: Shape.Square},

  ]

  constructor() { }

  ngOnInit(): void {
  }

  setPointer(pointer, size){
    this.selectedPointer = pointer;
    this.pointerSize = size;
    this.setPointerStyle.emit({pointer, size});
  }

  clearPointer(){
    this.selectedPointer = null;
    this.pointerSize = null;
    this.clearPointerStyle.emit();
  }
}

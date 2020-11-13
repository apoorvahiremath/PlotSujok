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

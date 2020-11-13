import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tcmLeftMeredian } from '../../data/tcm-left';
import { Sizes } from '../../enums/sizes.enum'
import { Color } from '../../enums/color.enum'
import { Shape } from '../../enums/shape.enum'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'meredian-select',
  templateUrl: './meredian-select.component.html',
  styleUrls: ['./meredian-select.component.scss']
})
export class MeredianSelectComponent implements OnInit {
  points = tcmLeftMeredian;
  selectedSPoints: any[] = [];
  selectedTPoints: any[] = [];
  selectedMPoints: any[] = [];
  
  Sizes = Sizes;
  Color = Color;
  Shape = Shape;

  @Output()
  pointAdded = new EventEmitter()

  @Output()
  pointRemoved = new EventEmitter()

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  pointExists(newPoint){
    let found = 0;
    if(!newPoint)
      return false;
    let pointS  = this.selectedSPoints.find(pt=> pt.name === newPoint.name);
    console.log('pointS',pointS);
    
    if(pointS)
      found++;
    
    let pointT = this.selectedTPoints.find(pt=> pt.name === newPoint.name);
    console.log('pointT',pointT);
    
    if(pointT)
      found++;

    let pointM = this.selectedMPoints.find(pt=> pt.name === newPoint.name);
    console.log('pointM',pointM);

    if(pointM)
      found++;
    
    return found > 1? true : false;
  }

  selectPoint(event, color, shape, size){ 
    console.log(this.pointExists(event));
    
    if(event && !this.pointExists(event)){
      this.pointAdded.emit({...event, color, shape, size}); 
    }
    else{
      this.toastr.error(event.name + ' already selected');
    }
  }

  removePoint(event){  
    if(event && event.value){
      this.pointRemoved.emit(event.value);  
    }
  }
}

import { Injectable } from '@angular/core';
import { Shape } from '../../enums/shape.enum'

@Injectable({
  providedIn: 'root'
})
export class DrawPointService { 

  constructor() { }

  drawCoordinates(context, x, y, color, shape, size) {  
    context.beginPath(); 
    if(shape === Shape.Circle){ 
      context.arc(x, y, size, 0, 2 * Math.PI, true); 
      context.fillStyle = color;
      context.fill();
    }else{
      context.rect(x-4, y-4, size, size);
      context.strokeStyle = color;
      context.lineWidth = "2";
      context.stroke();
    }
    
  }


    // getPosition(point) {
  //   let shape = point.type === "M" ? "square": "circle";
  //   let color = point.type === "T" ? 'red' : 'blue';
  //   this.drawPointService.drawCoordinates(this.ctx,point.x, point.y, color, shape, Sizes.VERYSMALL);
  // }

}

import { Color } from '../enums/color.enum';
import { Shape } from '../enums/shape.enum';
import { Sizes } from '../enums/sizes.enum';

export interface SelectedPoint{
    name?: string;
    x: number; 
    y: number; 
    color: Color; 
    shape: Shape; 
    size: Sizes;
}




import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef ,  AfterViewInit  } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'image-map',
  templateUrl: './image-map.component.html',
  styleUrls: ['./image-map.component.css'] , 
 
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('.5s ease-out', 
             style({ height: 120, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 120, opacity: 1 }),
            animate('.5s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    ) , 

    
  ]
})
export class ImageMapComponent implements OnInit ,  AfterViewInit  {

  @Input()
  src: string

  @Input()
  coordinates: ImageMapCoordinate[]

  @Input()
  canEdit: boolean

  @Output('onClick')
  onClick: EventEmitter<ImageMapCoordinate> = new EventEmitter();
  @Output('onCreate')
  onCreate: EventEmitter<ImageMapCoordinate> = new EventEmitter();
  @Output('onEdit')
  onEdit: EventEmitter<ImageMapCoordinate> = new EventEmitter();
  @ViewChild('ElementRefName') element: ElementRef;

 currentWidth = 507
 currentHeight= 284
  constructor(eventManager: EventManager) { 
    
    window.onresize = (e) =>
    {
      this.responsiveView(this.element.nativeElement.offsetWidth , this.element.nativeElement.offsetHeight)
    };
  }

  ngOnInit() {}

    ngAfterViewInit(): void {

    


    }

  getCoordinateStyle(coordinate: ImageMapCoordinate): object {
    return {
      top: `${coordinate.y}px`,
      left: `${coordinate.x}px`,
      height: `${coordinate.height}px`,
      width: `${coordinate.width}px`
    };
  }




  onAreaCreate(event): ImageMapCoordinate {
    if(this.canEdit) {
    const {x, y} = this.element.nativeElement.getBoundingClientRect();

    const coordinate = new ImageMapCoordinate({x : event.pageX - x -5  , y : event.pageY - y -5 , width: 10, height: 10 , image : "" , name : "Image" + this.coordinates.length + 1  ,  clicked :true});
    this.onCreate.emit(coordinate)
    return coordinate
  }

  return null 
  }
  onAreaEdit(coordinate: ImageMapCoordinate): ImageMapCoordinate {

    if(this.canEdit)
{

  this.onCreate.emit(coordinate)
    return coordinate;}


    return null
  }

 

  
 responsiveView(width , height) {

  

  this.coordinates.forEach(elem => {

    

  elem.y =  (elem.y * height  ) / this.currentHeight 
  elem.x = (elem.x * width) / this.currentWidth

  })

  

  this.currentHeight = height
  this.currentWidth = width

 }


}

export class ImageMapCoordinate {
  x: number = 0
  y: number = 0
  width: number = 100
  height: number = 100
  name?: string 
  clicked ?: boolean = false 
  image :string


  constructor(init?: Partial<ImageMapCoordinate>) {
    Object.assign(this, init);
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss']
})
export class LayersComponent {

  scrooltotop(){
    window.scroll(0,0)
  }

}

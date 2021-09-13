import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  private foto = [
    {
      id:'1',
      imageURL:'https://www.ngenespanol.com/wp-content/uploads/2018/09/Monumentos-mundo.jpg'

    }


  ];

  constructor() {}

}

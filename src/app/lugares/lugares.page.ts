import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  private lugares = [
    {
      id:'1',
      title:'Torre Eiffel',
      imageURL:'https://cdn.culturagenial.com/es/imagenes/torre-eiffel-cke.jpg',
      comments:['es preciosa','me encanta']
    },
    {
      id:'2',
      title:'Estatua de la libertad',
      imageURL:'https://www.turismonuevayork.com/wp-content/uploads/2014/09/La-Estatua-de-la-Libertad-en-Nueva-York-760x500.jpg',
      comments:['es fabulosa','me apasiona']
    },
    {
      id:'3',
      title:'Catedral de Notre Dame',
      imageURL:'https://cdn.culturagenial.com/es/imagenes/a-catedral-fachada-bella-cke.jpg',
      comments:['es fabulosa','me apasiona']
    }

  ];



  constructor() { }

  ngOnInit() {
  }

}

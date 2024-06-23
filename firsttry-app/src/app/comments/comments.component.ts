import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src='https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn'/>
  <p>
    lorem ipsum dolor
  </p>
  
  `,
  styles: `
  img{
    width: 60%;
    height: auto;
    }
  `
})
export class CommentsComponent {

}

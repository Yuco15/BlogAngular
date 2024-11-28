import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Inoticia } from '../../interfaces/inoticia';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  isBtnEnable: boolean = true;

  // Array multidimensional con noticias iniciales
   arrNoticias:any = [
    {
      titulo: 'Primera Noticia',
      imagen: 'https://images.unsplash.com/photo-1729542837726-ab4fc9a95eb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
      texto: 'Esta es la primera noticia del blog.',
      fecha: '2024-11-28'
    },
    {
      titulo: 'Segunda Noticia',
      imagen: 'https://images.unsplash.com/photo-1729550249180-ad89793cc18d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D',
      texto: 'Esta es la segunda noticia del blog.',
      fecha: '2024-11-27'
    }
  ];

  // para una nueva noticia
  nuevaNoticia:Inoticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: ''
  };
  //guardamos datos y validamos
  guardarDatos():void{
    const { titulo, imagen, texto, fecha } = this.nuevaNoticia;
    // Validar que todos los campos están llenos
     if (!titulo || !imagen || !texto || !fecha) {
      alert('Todos los campos son obligatorios.');
      this.isBtnEnable=false;
      return;

  }
    this.arrNoticias.push(this.nuevaNoticia);
    this.nuevaNoticia={
      titulo: '',
      imagen: '',
      texto: '',
      fecha: ''
    };
  }
  //Cargamos datos
  cargarDatos(): String {
    let html: String = '';
    this.arrNoticias.forEach((noticias:any) => {
      html += ` <h3>${noticias.titulo}</h3>
                      <img src="${noticias.imagen}" alt="Imagen de la noticia" class="img-fluid d-block mx-auto rounded" />
                      <p>${noticias.texto}</p>
                      <small>Publicado el: ${noticias.fecha}</small><hr>`;
    });
    return html;
  }
}

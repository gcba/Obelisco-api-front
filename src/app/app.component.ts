import { Component } from '@angular/core';
import { NavbarRoute, SearchbarItem } from 'ngx-obelisco-example/core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-api';

  routes: NavbarRoute[] = [
    {
      title: 'Documentación',
      route: '/docs',
    },
    {
      title: 'Sobre Obelisco',
      route: '/about',
    },
  ];

  searchbarItems: SearchbarItem[] = [
    {
      title: 'Documentación',
      route: '/docs',
    },
    {
      title: 'Sobre Obelisco',
      route: '/about',
    },
    {
      title: 'Introducción',
      route: '/docs/introduction',
    },

    { title: 'Footer - Todos', route: '/docs/footer/all' },
    { title: 'Footer - Enlaces', route: '/docs/footer/links' },
    { title: 'Footer - Teléfonos', route: '/docs/footer/phones' },
    { title: 'Footer - Redes Sociales', route: '/docs/footer/networks' },
    { title: 'Footer - Imágenes', route: '/docs/footer/images' },

    { title: 'Resolución', route: '/docs/resolution' },

    { title: 'Version - Todas', route: '/docs/versions/all' },
    { title: 'Version - Listado', route: '/docs/versions/list' },
    { title: 'Version - Número de versión', route: '/docs/versions/number' },

    { title: 'Header - Images', route: '/docs/header/images' },

    { title: 'Areas - Listado', route: '/docs/government-areas/areas-list' },
    { title: 'Areas - Por ID', route: '/docs/government-areas/areas-by-id' },
    { title: 'Areas - Todas', route: '/docs/government-areas/all' },

    {
      title: 'Implementacion - Javascript',
      route: '/docs/implementation/javascript',
    },
    { title: 'Implementacion - React', route: '/docs/implementation/react' },
    {
      title: 'Implementacion - Angular',
      route: '/docs/implementation/angular',
    },
    {
      title: 'Implementacion - Flutter',
      route: '/docs/implementation/flutter',
    },
    { title: 'Implementacion - PHP', route: '/docs/implementation/php' },
  ];
}

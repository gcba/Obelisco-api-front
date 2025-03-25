import { AfterViewInit, Component } from '@angular/core';
import { DataService } from 'src/app/services/request-data/data.service';
import { Router } from '@angular/router';
import { NavVerticalItems } from 'ngx-obelisco-example/core/models';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent implements AfterViewInit {
  constructor(private data: DataService, private router: Router) {}

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

  public introList: NavVerticalItems[] = [
    {
      title: 'Introducción',
      route: '/docs/introduction',
      icon: 'bx bx-home',
    },
  ];

  public navList: NavVerticalItems[] = [
    {
      title: 'Footer',
      route: '/docs/footer/all',
      icon: 'bx bx-dock-bottom',
      children: [
        { title: 'Todos', route: '/docs/footer/all' },
        { title: 'Enlaces', route: '/docs/footer/links' },
        { title: 'Teléfonos', route: '/docs/footer/phones' },
        { title: 'Redes Sociales', route: '/docs/footer/networks' },
        { title: 'Imágenes', route: '/docs/footer/images' },
      ],
    }
  ];

  public howToList: NavVerticalItems[] = [
    {
      title: 'Implementacion',
      route: '/docs/implementation/javascript',
      icon: 'bx bx-code-alt',
      children: [
        { title: 'Javascript', route: '/docs/implementation/javascript' },
        { title: 'React', route: '/docs/implementation/react' },
        { title: 'Angular', route: '/docs/implementation/angular' },
        { title: 'Flutter', route: '/docs/implementation/flutter' },
        { title: 'PHP', route: '/docs/implementation/php' },
      ],
    },
  ];

  ngAfterViewInit() {
    const collapseSubmenu = document.getElementById('collapseSubmenu');
    if (collapseSubmenu) {
      const items = collapseSubmenu.querySelectorAll('*');
      items.forEach(item => {
        item.addEventListener('click', () => {
          collapseSubmenu.classList.remove('show');
        });
      });
    }
  }
}

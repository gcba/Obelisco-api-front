// export const URL_BASE = "https://obelisco.com/";
// export const URL_BASE = 'http://localhost:3000';
export const URL_BASE = 'https://obelisco-back.up.railway.app';

export interface DocumentData {
  title: string;
  route?: string;
  items?: DocumentData[];
  id?: string;
}

export const DOCS_SEARCH: DocumentData[] = [
  { title: 'Footer - Imágenes', route: '/docs/footer/images' },
  { title: 'Footer - Teléfonos', route: '/docs/footer/phones' },
  { title: 'Footer - Enlaces', route: '/docs/footer/links' },
  { title: 'Footer - Redes sociales', route: '/docs/footer/networks' },
  { title: 'Footer - Todos', route: '/docs/footer/all' },
  { title: 'Resolución', route: '/docs/resolution' },
  { title: 'Versiones - Todos', route: '/docs/versions/all' },
  { title: 'Versiones - Listado', route: '/docs/versions/list' },
  { title: 'Versiones - Número de versión', route: '/docs/versions/number' },
];

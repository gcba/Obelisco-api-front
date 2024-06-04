import { Component } from '@angular/core';
import { URL_BASE } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.scss'],
})
export class PhpComponent {
  code = `
<?php
  $url = '${URL_BASE}/api/obelisco/footer/phones';

  $response = file_get_contents($url);

  if ($response !== false) {
      echo $response;
  } else {
      echo 'Error al obtener los datos del endpoint';
  }
?>`;
}

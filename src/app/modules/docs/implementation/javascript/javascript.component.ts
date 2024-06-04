import { Component, OnInit } from '@angular/core';
import { URL_BASE } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss'],
})
export class JavascriptComponent {
  code = `
fetch('${URL_BASE}/api/obelisco/footer/phones')
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud falló');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });`;
}

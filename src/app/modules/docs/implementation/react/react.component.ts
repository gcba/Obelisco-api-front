import { Component } from '@angular/core';
import { URL_BASE } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss'],
})
export class ReactComponent {
  code = `
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EndpointComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('${URL_BASE}/api/obelisco/footer/phones');
              setData(response.data);
          } catch (error) {
              console.error('Error al obtener los datos:', error);
          }
      };

      fetchData();
  }, []);
};

export default EndpointComponent;`;
}

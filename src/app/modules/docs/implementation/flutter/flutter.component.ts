import { Component } from '@angular/core';
import { URL_BASE } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-flutter',
  templateUrl: './flutter.component.html',
  styleUrls: ['./flutter.component.scss'],
})
export class FlutterComponent {
  code = `
import 'dart:convert';
import 'package:http/http.dart' as http;

class DataService {
  Future fetchData() async {
    final response = await http.get(Uri.parse('${URL_BASE}/api/obelisco/footer/phones'));
    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Error al obtener los datos');
    }
  }
}`;
}

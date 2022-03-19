import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private httpCliente: HttpClient) { }

  buscar(cep: String){
    return this.httpCliente.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}

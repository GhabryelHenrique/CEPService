import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor(private fb: FormBuilder) { }

 consultForm = this.fb.group({
    cep: [''],
    logradouro: [''],
    bairro: [''],
    cidade: [''],
    uf: [''],
  })


onSubmit(){
  console.log(this.consultForm)
}
}

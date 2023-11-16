import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';

@Component({
  selector: 'app-root', 
  template: `
  <div>
    <h1>{{title}}</h1>
    <p *ngIf="environment.production; else devMode">
  
  Modo de Produccion  
  </p>
  </div>
  <ng-template #devMode> 
<p>Modo de desarrollo</p>
  </ng-template>

<div *ngIf="data">
<h2>Datos de la API:</h2>
<pre>{{data | json}}</pre>
</div>
`,
  styles: [],
})
export class AppComponent implements OnInit{
  title = 'Mi aplicación de Angular';
  environment = environment;
  data: any;

constructor(private httpClient: HttpClient) {}


  ngOnInit(): void {
    this.httpClient.get(`${environment.apiUrl}/posts/1`).subscribe((response) => {
      this.data = response;
    });
  }
}

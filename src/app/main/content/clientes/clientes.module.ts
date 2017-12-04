import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const routes: Routes = [
  {
      path     : '**',
      component: ClientesComponent
  }
];

@NgModule({
  imports: [    
    RouterModule.forChild(routes)    
  ],
  declarations: [ClientesComponent, ClienteListaComponent, ClienteFormComponent]
})
export class ClientesModule { }

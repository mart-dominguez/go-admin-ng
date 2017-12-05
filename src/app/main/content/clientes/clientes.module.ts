import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { SharedModule } from '../../../core/modules/shared.module';
import { ClientesHttpServiceService } from './clientes-http-service.service';
const routes: Routes = [
  {
      path     : '**',
      component: ClientesComponent
  }
];

@NgModule({
  imports: [    
    SharedModule,
    RouterModule.forChild(routes)    
  ],
  declarations: [ClientesComponent, ClienteListaComponent, ClienteFormComponent],
  providers:[ClientesHttpServiceService],
  entryComponents: [ClienteFormComponent]
  
})
export class ClientesModule { }

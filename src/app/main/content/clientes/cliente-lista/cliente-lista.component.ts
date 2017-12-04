import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation,Input } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import { FuseConfirmDialogComponent } from '../../../../core/components/confirm-dialog/confirm-dialog.component';
import { FormGroup } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { fuseAnimations } from '../../../../core/animations';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { ClientesHttpServiceService } from '../clientes-http-service.service';


@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class ClienteListaComponent implements OnInit {
  displayedColumns = [ 'nombre', 'email', 'telefono', 'direccion', 'buttons'];
  
  @ViewChild('dialogContent') dialogContent: TemplateRef<any>;
  dialogRef: any;
  
  clientes:Cliente[];

  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  dataSource:MatTableDataSource<Cliente>;

  constructor(        public dialog: MatDialog,public srvCli: ClientesHttpServiceService  ) { }

  ngOnInit() {
    this.srvCli.getLista().subscribe( (res) => {
        this.clientes = res;
       this.dataSource = new MatTableDataSource(this.clientes);
      }      
    );    
  }

  borrar(cliente:Cliente){

  }

  editar(elCliente:Cliente)
  {
      this.dialogRef = this.dialog.open(ClienteFormComponent, {
          panelClass: 'contact-form-dialog',
          data      : {
              cliente: elCliente,
              action : 'edit'
          }
      });

      this.dialogRef.afterClosed()
          .subscribe(response => {
              if ( !response )
              {
                  return;
              }
              const actionType: string = response[0];
              const formData: FormGroup = response[1];
              switch ( actionType )
              {
                  /**
                   * Save
                   */
                  case 'save':
                    console.log("save!!!!")
                     // this.contactsService.updateContact(formData.getRawValue());
                      this.srvCli.agregar(formData.getRawValue());
                      break;
                  /**
                   * Delete
                   */
                  case 'delete':
                      console.log("delete!!!!")                  
//                      this.deleteContact(contact);

                      break;
              }
          });
  }

}

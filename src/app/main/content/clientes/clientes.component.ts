import { Component, OnInit,ViewChild , ViewEncapsulation} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from './cliente.model';
import { MatDialog } from '@angular/material';
import { ClientesHttpServiceService } from './clientes-http-service.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { fuseAnimations } from '../../../core/animations';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class ClientesComponent implements OnInit {
  dialogRef: any;
  
  constructor(private miServicio:ClientesHttpServiceService,
    public dialog: MatDialog) { }
    ngOnInit() {
    }
  
    nuevoCliente()
    {
        this.dialogRef = this.dialog.open(ClienteFormComponent, {
            panelClass: 'contact-form-dialog',
            data      : {
                action: 'new'
            }
        });

        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if ( !response )
                {
                    return;
                }
                console.log("DATOS GUARDAR");
                console.log(response.getRawValue());
                this.miServicio.agregar(response.getRawValue());

            });

    }

}

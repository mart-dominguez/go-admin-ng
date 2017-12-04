import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  dialogTitle: string;
  clienteForm: FormGroup;
  action: string;
  cliente: Cliente;

  constructor(
      public dialogRef: MatDialogRef<ClienteFormComponent>,
      @Inject(MAT_DIALOG_DATA) private data: any,
      private formBuilder: FormBuilder
  )
  {
      this.action = data.action;

      if ( this.action === 'edit' )
      {
          this.dialogTitle = 'Edit cliente';
          this.cliente = data.contact;
      }
      else
      {
          this.dialogTitle = 'New cliente';
          this.cliente = {id:null,nombre:'',correo:'',telefono:'',direccion:''};
      }

      this.clienteForm = this.createClienteForm();
  }

  ngOnInit()
  {
  }

  createClienteForm()
  {
      return this.formBuilder.group({
          id      : [this.cliente.id],
          nombre  : [this.cliente.nombre],
          correo: [this.cliente.correo],
          telefono  : [this.cliente.telefono],
          direccion: [this.cliente.direccion]
    });
  }
import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { Observable } from 'rxjs/Observable'
//import { ClienteAbstractService } from './Cliente-abstract-service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';

@Injectable()
export class ClientesHttpServiceService {

  private server:string="http://localhost:9010/go-admin-1.0-SNAPSHOT/api/";
  private clientes:Cliente[]=[];

  //private clienteUpdated = new Subject<Cliente>();
  clienteUpdated: BehaviorSubject<{}> = new BehaviorSubject({});

  constructor(private http: HttpClient){
    //super();
  }


  agregar(unCliente:Cliente): Observable<any>{
    console.log(this.server+"cliente");
    console.log(unCliente);
    // esta definido?????
    console.log(" esta definido?????");
    console.log(this.http);
    return  this.http.post(this.server+"cliente", unCliente).
      flatMap(z => {
        console.log(z);
        this.clientes.push(unCliente);
        this.clienteUpdated.next(this.clientes);
        return Observable.of(z);      
    });
    
  }

  getLista():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.server+"cliente");
  }

  buscarPorId(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(this.server+"cliente/"+id);
  }
  
  borrar(id:number):Observable<any>{
    return Observable.empty();
  }

  actualizar(unCliente:Cliente):Observable<any>{
    return  this.http.put(this.server+"cliente/"+unCliente.id, unCliente).
    flatMap(z => {
      console.log(z);
      this.clienteUpdated.next(this.clientes);
      return Observable.of(z);      
    });
  }

  
}

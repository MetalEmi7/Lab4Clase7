import { Injectable } from '@angular/core';
import { Http, ResponseOptions, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MiHttpService {
  
  constructor(public http:Http) { }

  public subirFoto(selected)
  {
    let url="http://localhost/Slim/apirest/subirFoto";

    return this.http
    .post(url, selected)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handlerError)
  }





  private extraerDatos(resp:Response) {
    return resp.json() || {}
  }

  private handlerError(error:Response | any) {
    return error; }


}

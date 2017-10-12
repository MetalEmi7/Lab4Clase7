
import { Component } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { MiHttpService } from "./servicios/mi-http.service";

// const URL = '/api/';
const URL = 'http://Localhost:/Slim/apirest/subirFoto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public http:MiHttpService){}

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }



  queDevuelve(archivo)
  {
    console.log(archivo.target.files[0]);

    this.http.subirFoto(archivo)
    .then(data=>{      

        console.log(data); 

    })
    .catch(error=> console.log(error))
    
  }





}
  

 
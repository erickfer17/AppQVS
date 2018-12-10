/*import { HttpClient, HttpHeaders } from '@angular/common/http';*/
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HTTP, HTTPResponse } from '@ionic-native/http'
import 'rxjs/add/operator/map';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl = 'http://qvs.unav.edu.mx/ws/';
@Injectable()
export class RestProvider {

  

  constructor(public http: Http,public httpPlugin: HTTP ) {
    console.log('Hello RestProvider Provider');
  }
//coneccion login al WS
  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(apiUrl+'login.php', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
//coneccion de registro al WS
  registro(credentials) {
    return new Promise((resolve, reject) => {
        let headers2 = new Headers();
        headers2.append('Content-Type', 'application/json');
        this.http.post(apiUrl+'registro.php', JSON.stringify(credentials), {headers: headers2})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
//coneccion registro test agua al WS
  registrotestagua(credentials) {
    return new Promise((resolve, reject) => {
        let headers3 = new Headers();
        headers3.append('Content-Type', 'application/json');
        this.http.post(apiUrl+'registraresultados.php', JSON.stringify(credentials), {headers: headers3})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
//coneccion al WS
acepto(credentials) {
  return new Promise((resolve, reject) => {
      let headers3 = new Headers();
      headers3.append('Content-Type', 'application/json');
      this.http.post(apiUrl+'registraresultados.php', JSON.stringify(credentials), {headers: headers3})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
  });
}

reg(credentials) {
  return new Promise((resolve, reject) => {
      let headers3 = new Headers();
      headers3.append('Content-Type', 'application/json');
      this.httpPlugin.setHeader( "" , "content-type", "application/json");
      this.httpPlugin.get(apiUrl+'registro.php', JSON.stringify(credentials),headers3)
  .then(data => {
    resolve(data.data.json());
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {
    reject(error.error);
    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  });
}





}

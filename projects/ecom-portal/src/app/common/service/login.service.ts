import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from './user';
import { environment } from '../../../environments/environment';
import { APP_CONFIG } from '../../material-shared/AppConfig';
import { IAppConfig } from '../../material-shared/IAppConfig';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient , @Inject(APP_CONFIG) private appConfig: IAppConfig) {
      console.log(appConfig.apiEndPoint);
  }

  login(order: IOrder) {
    console.log(JSON.stringify(order))
    //return this.http.post(environment.apiEndPoint+'/user/login', user);
    return this.http.post(environment.apiEndPoint+'/order', order);
  }
}

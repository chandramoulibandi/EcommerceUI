import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user';
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

  login(user: IUser) {
    return this.http.post(environment.apiEndPoint+'/user/login', user);
  }
}

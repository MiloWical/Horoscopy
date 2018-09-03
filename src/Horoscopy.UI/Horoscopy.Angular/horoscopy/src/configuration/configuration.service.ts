import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private filename = '../assets/app-config.json';
  private configuration: IConfiguration;

  constructor(private httpClient: HttpClient) {
  }

  loadConfig(): Promise<any> {
    const promise = this.httpClient.get(this.filename).toPromise() as any;

    promise.then(loadedConfig => this.configuration = loadedConfig as IConfiguration);

    return promise;
  }

  getConfiguration() : IConfiguration {
    return this.configuration;
  }
}

export interface IConfiguration {
  configuration:
  {
    services: IService[];
  }
}

export interface IService {
  name: string;
  url: string;
  routes: IRoute[];
}

export interface IRoute {
  name: string;
  route: string;
}

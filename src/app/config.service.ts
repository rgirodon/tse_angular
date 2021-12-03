import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'assets/config.json';

  config = new BehaviorSubject<Config>({
    api_url: '',
    text_file: '',
    date: ''
  });

  constructor(private http: HttpClient) { }

  loadConfig() {
    
    this.http.get<Config>(this.configUrl).subscribe(
      
     data => {
       this.config.next(data);
     }
    );
  }
}

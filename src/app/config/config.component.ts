import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Config } from '../config';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  config: Observable<Config> | undefined;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {

    this.showConfig();
  }

  showConfig() {

    this.config = this.configService.config;

    this.configService.loadConfig();
  }

}

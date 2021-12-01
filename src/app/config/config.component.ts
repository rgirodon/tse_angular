import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Config } from '../config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  config: Config | undefined;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {

    this.showConfig();
  }

  showConfig() {
    this.configService.getConfig().subscribe(
      (data: Config) => this.config = {
          api_url: data.api_url,
          text_file:  data.text_file,
          date: data.date,
      });
  }

}

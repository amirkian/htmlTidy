import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfluenceService } from './services/confluence.service';


//var tidy = require('./htmltidy').tidy;
var tidy = require('./test');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private confluenceService: ConfluenceService) {

  }
  title = 'htmlTidy';
  //   otuput= tidy('<table><tr><td>badly formatted html</tr>', function(err:any, html:string) {
  //     console.log(html);
  // });
  name = 'Angular';

  public model = {
    name: 'Hardik',
    description: '<p>This is a sample form using CKEditor 4.</p>'
  };

  onSubmit() {
    console.log(`Form submit, model: ${JSON.stringify(this.model)}`);
  }
  GetBackEndData() {
    this.confluenceService.GetBackEndData().subscribe((Response) => {
console.log(Response);
    }
    )
  }

}

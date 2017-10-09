import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  
  <div id="title"> TuneRater </div>
  	<div class="song">
		<iframe src="https://open.spotify.com/embed/track/3hSKv4b8UG0PMdHPatdICQ" 
			width="300" height="380" frameborder="0" allowtransparency="true">
		</iframe>
  </div>		
  `

})
export class AppComponent {
  
}


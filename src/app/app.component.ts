import { Component } from '@angular/core';

declare const html2canvas;

@Component({
  selector: 'app-root',
  template: `
    <div id="hello">
      <p>
        Start editing to see some magic happen :)
      </p>
    </div>

    <button (click)="generate($event)">generage image</button>

    <hr />
    <pre>{{ base64 }}</pre>
    <hr />
  `,
  styles: []
})
export class AppComponent {
  base64;
  generate($event) {
    html2canvas(document.querySelector('#hello')).then(canvas => {
      document.body.appendChild(canvas);
      this.base64 = document.getElementsByTagName('canvas')[0].toDataURL();
    });
  }
}

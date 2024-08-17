import { Component } from '@angular/core';
import * as jsondiffpatch from 'jsondiffpatch';

@Component({
  selector: 'app-json-diff',
  templateUrl: './json-diff.component.html',
  styleUrls: ['./json-diff.component.css']
})
export class JsonDiffComponent {
  json1: string = '';
  json2: string = '';
  diffHtml: string = '';

  compareJson() {
    try {
      const obj1 = JSON.parse(this.json1);
      const obj2 = JSON.parse(this.json2);

      const delta = jsondiffpatch.diff(obj1, obj2);
      this.diffHtml = jsondiffpatch.formatters.html.format(delta, obj1);
    } catch (e) {
      console.error('Invalid JSON', e);
      this.diffHtml = 'Invalid JSON';
    }
  }
}

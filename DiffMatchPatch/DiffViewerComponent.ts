import { Component } from '@angular/core';
import { DiffMatchPatch, Diff } from 'diff-match-patch';

@Component({
  selector: 'app-diff-viewer',
  templateUrl: './diff-viewer.component.html',
  styleUrls: ['./diff-viewer.component.css']
})
export class DiffViewerComponent {
  originalText = 'This is the original text.';
  modifiedText = 'This is the modified text.';

  diffResult: Diff[] = [];

  constructor() {
    const dmp = new DiffMatchPatch();
    this.diffResult = dmp.diff_main(this.originalText, this.modifiedText);
    dmp.diff_cleanupSemantic(this.diffResult);
  }

  getFormattedDiff(): string {
    let formattedDiff = '';
    this.diffResult.forEach((diff) => {
      if (diff[0] === 0) {
        formattedDiff += diff[1];  // Unchanged text
      } else if (diff[0] === -1) {
        formattedDiff += `<del>${diff[1]}</del>`;  // Deleted text
      } else if (diff[0] === 1) {
        formattedDiff += `<ins>${diff[1]}</ins>`;  // Inserted text
      }
    });
    return formattedDiff;
  }
}

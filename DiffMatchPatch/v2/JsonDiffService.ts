import { Injectable } from '@angular/core';
import { DiffMatchPatch, Diff } from 'diff-match-patch';

@Injectable({
  providedIn: 'root'
})
export class JsonDiffService {
  private dmp: DiffMatchPatch;

  constructor() {
    this.dmp = new DiffMatchPatch();
  }

  getJsonDiff(json1: string, json2: string): Diff[] {
    // Normalize the JSON strings (remove whitespace)
    const text1 = JSON.stringify(JSON.parse(json1), null, 2);
    const text2 = JSON.stringify(JSON.parse(json2), null, 2);

    // Get the diff between the two JSON strings
    const diffs = this.dmp.diff_main(text1, text2);

    // Optionally, clean up the diff by removing small, insignificant differences
    this.dmp.diff_cleanupSemantic(diffs);

    return diffs;
  }
}

import { Component, OnInit } from '@angular/core';
import { JsonDiffService } from './json-diff.service';
import { Diff } from 'diff-match-patch';

@Component({
  selector: 'app-json-diff',
  templateUrl: './json-diff.component.html',
  styleUrls: ['./json-diff.component.css']
})
export class JsonDiffComponent implements OnInit {
  json1 = `{"name": "John", "age": 30, "city": "New York"}`;
  json2 = `{"name": "John", "age": 31, "city": "New York", "country": "USA"}`;
  diffs: Diff[] = [];

  constructor(private jsonDiffService: JsonDiffService) {}

  ngOnInit(): void {
    this.diffs = this.jsonDiffService.getJsonDiff(this.json1, this.json2);
  }
}

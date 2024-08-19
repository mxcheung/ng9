import { Component } from '@angular/core';

@Component({
  selector: 'app-json-compare',
  templateUrl: './json-compare.component.html',
  styleUrls: ['./json-compare.component.css']
})
export class JsonCompareComponent {
  originalJson = {
    "Aidan Gillen": { "array": ["Game of Thron\"es", "The Wire"], "string": "some string", "int": 2, "aboolean": true, "boolean": true, "object": { "foo": "bar", "object1": { "new prop1": "new prop value" }, "object2": { "new prop1": "new prop value" }, "object3": { "new prop1": "new prop value" }, "object4": { "new prop1": "new prop value" } } },
    "Amy Ryan": { "one": "In Treatment", "two": "The Wire" },
    "Annie Fitzgerald": ["Big Love", "True Blood"],
    "Anwan Glover": ["Treme", "The Wire"],
    "Alexander Skarsgard": ["Generation Kill", "True Blood"],
    "Clarke Peters": null,
    "Joe Farmer": ["The Corner", "Oz", "The Wire"]
  };

  modifiedJson = {
    "Aidan Gillen": { "array": ["Game of Thrones", "The Wire"], "string": "some string", "int": "2", "otherint": 4, "aboolean": "true", "boolean": false, "object": { "foo": "bar" } },
    "Amy Ryan": ["In Treatment", "The Wire"],
    "Annie Fitzgerald": ["True Blood", "Big Love", "The Sopranos", "Oz"],
    "Anwan Glover": ["Treme", "The Wire"],
    "Alexander Skarsg?rd": ["Generation Kill", "True Blood"],
    "Alice Farmer": ["The Corner", "Oz", "The Wire"],
    "Joe Farmer": ["The Corner", "Oz", "The Wire"]
  };

  result: any[] = [];

  constructor() {
    this.result = this.compareJson(this.originalJson, this.modifiedJson);
  }

  compareJson(original: any, modified: any): any[] {
    const result = [];
    const allKeys = new Set([...Object.keys(original || {}), ...Object.keys(modified || {})]);

    allKeys.forEach((key) => {
      const originalValue = original[key];
      const modifiedValue = modified[key];

      // Convert complex types to JSON string for comparison
      const originalStr = typeof originalValue === 'object' ? JSON.stringify(originalValue) : originalValue;
      const modifiedStr = typeof modifiedValue === 'object' ? JSON.stringify(modifiedValue) : modifiedValue;

      let status = 'same'; // Default status if values are the same

      if (originalStr !== modifiedStr) {
        status = originalStr === undefined ? 'added' : modifiedStr === undefined ? 'removed' : 'modified';
      }

      result.push({
        attribute: key,
        before: originalStr !== undefined ? originalStr : '',
        after: modifiedStr !== undefined ? modifiedStr : '',
        status
      });
    });

    return result;
  }
}

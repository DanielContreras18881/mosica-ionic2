// LoadSpinner.ts
import {Component, Input} from '@angular/core';

@Component({
  selector: 'LoadSpinner',
  templateUrl: 'load-spinner.html',
})
export class LoadSpinner {
  @Input() isLoading
}



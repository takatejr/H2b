import { Injectable, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {

  placeholder = new BehaviorSubject('')

  constructor(private route: Router, private router: ActivatedRoute) {
    this.placeholderValue()
  }

  placeholderValue() {
   this.placeholder.next(this.route.url.split('/').pop())
  }
}

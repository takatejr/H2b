import { Injectable, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {

  placeholder = new BehaviorSubject('')
  standardPlaceholder = new BehaviorSubject("Search free high-resolution photos")


  constructor(private route: Router, private router: ActivatedRoute) {
    this.handlePlaceholder()
  }

  setPlaceholder() {
    this.placeholder.next(this.standardPlaceholder.value)
  }

  handlePlaceholder() {
    const title = this.route.url.split('/').pop()
    if (title) {
      this.placeholder.next(this.route.url.split('/').pop())
    } else {
      this.placeholder.next(this.standardPlaceholder.value)
    }
  }
}

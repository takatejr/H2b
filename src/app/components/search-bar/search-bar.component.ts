import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {

  constructor(private route: Router, private searchService: SearchBarService) {
  }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three', "island", "whatever", "basket", "football"];
  emptyOptions: string[] = ['Not found']
  filteredOptions$: Observable<string[]>;
  placeholder = this.searchService.placeholder.value

  selectValue(value: string) {
    this.redirectTo(value)
    this.searchService.placeholder.next(value)

  }

  redirectTo(url:string){
    this.route.navigateByUrl('/', {skipLocationChange: false}).then(()=>
    this.route.navigate([`photos/${url}`]));
 }

  ngOnInit() {
    this.filteredOptions$ = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value)),
      );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    if (value.length >= 3) {
      const filtered = this.options.filter(option => option.toLowerCase().includes(filterValue))
      return (filtered.length === 0 ? this.emptyOptions : filtered)
    }
  }
}

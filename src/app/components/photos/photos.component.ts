import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  tags = []
  photosCol1 = []
  photosCol2 = []
  photosCol3 = []
  placeholder = ''

  constructor(private searchService: SearchBarService, private _routes: ActivatedRoute) {
    this.searchService.placeholder.subscribe(placeholder => {
      if (this.placeholder !== placeholder) {
        this.photosCol1 = [];
        this.photosCol2 = [];
        this.photosCol3 = [];
        this.tags = [];

        this.placeholder = placeholder
      }

    })

    this._routes.data.subscribe(
      ({ data }) => {
        if (data.results[0] !== undefined) {
          {
            for (let i = 0; i < environment.PER_PAGE; i++) {
              const { tags, urls, created_at, user, alt_description } = data.results[i]
              const photos = {
                urls: { small: urls.small, regular: urls.regular },
                created_at: created_at,
                user: { name: user.name, image: user.profile_image.medium },
                alt_description: alt_description,
                tags: tags.map(({ source }) => {
                  if (source !== undefined) {
                    const value = source.title
                    if (!this.tags.includes(value)) {
                      this.tags.push(value)
                    }
                    return value
                  }
                }),

              }

              if (i <= 6) {
                this.photosCol1.push(photos)
              } else if (i >= 6 && i < 14) {
                this.photosCol2.push(photos)
              } else if (i >= 14 && i <= 20) {
                this.photosCol3.push(photos)
              }

            }
            this.tags = this.tags.filter((v, i, a) => a.indexOf(v) === i)
          }
        }
      }
    )


  }

  title = this.searchService.placeholder.pipe(map(e => e))

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artist';

@Component({
  selector: 'app-main-content-search-result',
  templateUrl: './main-content-search-result.component.html',
  styleUrls: ['./main-content-search-result.component.scss']
})
export class MainContentSearchResultComponent implements OnInit {

  @Input() artists: Artist[] = []
  artist: Artist = this.artists[0]

  constructor(
  ) { }

  ngOnInit(): void {
  }
}

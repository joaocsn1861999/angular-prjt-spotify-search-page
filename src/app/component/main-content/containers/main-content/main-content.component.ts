import { Component, OnInit, Output } from '@angular/core';
import { GetArtistsService } from '../../services/get-artists.service';
import { Artist } from '../../interfaces/artist';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  searchData: string = "";
  searchResult: Artist[] = [];
  showCards: boolean = true;
  showQueryResult: boolean = false;

  constructor(
    private service: GetArtistsService
  ) { }

  ngOnInit(): void {
  }

  getResult():void {
    const searchTerm = this.searchData.toLowerCase();
    if (searchTerm.trim().length < 1 || searchTerm === "") {
      this.showCards = true;
      this.showQueryResult = false;
    } else {
      this.service.getArtists(searchTerm).subscribe(result =>{
        this.searchResult = result;
        this.showCards = false;
        this.showQueryResult = true;
      })
    }
  }

}

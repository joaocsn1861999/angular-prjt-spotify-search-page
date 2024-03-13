import { SideBarPlaylistComponent } from './component/side-bar/components/side-bar-playlist/side-bar-playlist.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './component/side-bar/containers/side-bar/side-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainContentComponent } from './component/main-content/containers/main-content/main-content.component';
import { SideBarNavigationComponent } from './component/side-bar/components/side-bar-navigation/side-bar-navigation.component';
import { SideBarLibraryComponent } from './component/side-bar/components/side-bar-library/side-bar-library.component';
import { SideBarFooterComponent } from './component/side-bar/components/side-bar-footer/side-bar-footer.component';
import { SideBarPodcastComponent } from './component/side-bar/components/side-bar-podcast/side-bar-podcast.component';
import { MainContentCardsComponent } from './component/main-content/components/main-content-cards/main-content-cards.component';
import { MainContentSearchResultComponent } from './component/main-content/components/main-content-search-result/main-content-search-result.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FooterComponent,
    MainContentComponent,
    SideBarNavigationComponent,
    SideBarLibraryComponent,
    SideBarFooterComponent,
    SideBarPlaylistComponent,
    SideBarPodcastComponent,
    MainContentCardsComponent,
    MainContentSearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

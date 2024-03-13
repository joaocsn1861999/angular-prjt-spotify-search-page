import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarPodcastComponent } from './side-bar-podcast.component';

describe('SideBarPodcastComponent', () => {
  let component: SideBarPodcastComponent;
  let fixture: ComponentFixture<SideBarPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarPodcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

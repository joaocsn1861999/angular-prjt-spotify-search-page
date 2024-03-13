import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentSearchResultComponent } from './main-content-search-result.component';

describe('MainContentSearchResultComponent', () => {
  let component: MainContentSearchResultComponent;
  let fixture: ComponentFixture<MainContentSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentSearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

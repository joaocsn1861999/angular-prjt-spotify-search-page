import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentCardsComponent } from './main-content-cards.component';

describe('MainContentCardsComponent', () => {
  let component: MainContentCardsComponent;
  let fixture: ComponentFixture<MainContentCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarLibraryComponent } from './side-bar-library.component';

describe('SideBarLibraryComponent', () => {
  let component: SideBarLibraryComponent;
  let fixture: ComponentFixture<SideBarLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

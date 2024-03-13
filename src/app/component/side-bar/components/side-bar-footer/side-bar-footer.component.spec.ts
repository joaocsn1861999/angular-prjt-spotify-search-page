import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarFooterComponent } from './side-bar-footer.component';

describe('SideBarFooterComponent', () => {
  let component: SideBarFooterComponent;
  let fixture: ComponentFixture<SideBarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

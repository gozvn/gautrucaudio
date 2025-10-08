import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTop } from './home-page-top';

describe('HomePageTop', () => {
  let component: HomePageTop;
  let fixture: ComponentFixture<HomePageTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

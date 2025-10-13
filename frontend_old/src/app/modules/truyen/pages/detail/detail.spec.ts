import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTruyen } from './detail';

describe('Detail', () => {
  let component: DetailTruyen;
  let fixture: ComponentFixture<DetailTruyen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailTruyen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTruyen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

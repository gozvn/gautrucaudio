import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Errornotfound } from './errornotfound';

describe('Errornotfound', () => {
  let component: Errornotfound;
  let fixture: ComponentFixture<Errornotfound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Errornotfound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Errornotfound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

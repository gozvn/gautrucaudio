import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erroraccessdenied } from './erroraccessdenied';

describe('Erroraccessdenied', () => {
  let component: Erroraccessdenied;
  let fixture: ComponentFixture<Erroraccessdenied>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Erroraccessdenied]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Erroraccessdenied);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

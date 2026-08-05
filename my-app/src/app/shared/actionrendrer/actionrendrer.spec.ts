import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actionrendrer } from './actionrendrer';

describe('Actionrendrer', () => {
  let component: Actionrendrer;
  let fixture: ComponentFixture<Actionrendrer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actionrendrer],
    }).compileComponents();

    fixture = TestBed.createComponent(Actionrendrer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HysskillsComponent } from './hysskills.component';

describe('HysskillsComponent', () => {
  let component: HysskillsComponent;
  let fixture: ComponentFixture<HysskillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HysskillsComponent]
    });
    fixture = TestBed.createComponent(HysskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

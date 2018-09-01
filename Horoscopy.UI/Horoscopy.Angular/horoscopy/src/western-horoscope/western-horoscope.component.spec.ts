import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternHoroscopeComponent } from './western-horoscope.component';

describe('WesternHoroscopeComponent', () => {
  let component: WesternHoroscopeComponent;
  let fixture: ComponentFixture<WesternHoroscopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesternHoroscopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternHoroscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

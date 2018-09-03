import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternZodiacComponent } from './western-zodiac.component';

describe('WesternZodiacComponent', () => {
  let component: WesternZodiacComponent;
  let fixture: ComponentFixture<WesternZodiacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesternZodiacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternZodiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

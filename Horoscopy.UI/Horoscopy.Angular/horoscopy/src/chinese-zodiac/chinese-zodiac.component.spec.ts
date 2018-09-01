import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseZodiacComponent } from './chinese-zodiac.component';

describe('ChineseZodiacComponent', () => {
  let component: ChineseZodiacComponent;
  let fixture: ComponentFixture<ChineseZodiacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChineseZodiacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChineseZodiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

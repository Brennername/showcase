import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoFundMeComponent } from './go-fund-me.component';

describe('GoFundMeComponent', () => {
  let component: GoFundMeComponent;
  let fixture: ComponentFixture<GoFundMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoFundMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoFundMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDumpComponent } from './core-dump.component';

describe('CoreDumpComponent', () => {
  let component: CoreDumpComponent;
  let fixture: ComponentFixture<CoreDumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreDumpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreDumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

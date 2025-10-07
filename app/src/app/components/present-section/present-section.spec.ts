import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSection } from './present-section';

describe('PresentSection', () => {
  let component: PresentSection;
  let fixture: ComponentFixture<PresentSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

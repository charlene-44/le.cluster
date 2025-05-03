import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationCardHomeComponent } from './presentation-card-home.component';

describe('PresentationCardHomeComponent', () => {
  let component: PresentationCardHomeComponent;
  let fixture: ComponentFixture<PresentationCardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationCardHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationCardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

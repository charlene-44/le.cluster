import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixtapesComponent } from './mixtapes.component';

describe('MixtapesComponent', () => {
  let component: MixtapesComponent;
  let fixture: ComponentFixture<MixtapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixtapesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixtapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

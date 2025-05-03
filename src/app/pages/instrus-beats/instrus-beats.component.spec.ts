import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrusBeatsComponent } from './instrus-beats.component';

describe('InstrusBeatsComponent', () => {
  let component: InstrusBeatsComponent;
  let fixture: ComponentFixture<InstrusBeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrusBeatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrusBeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

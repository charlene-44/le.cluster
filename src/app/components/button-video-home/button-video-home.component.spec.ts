import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVideoHomeComponent } from './button-video-home.component';

describe('ButtonVideoHomeComponent', () => {
  let component: ButtonVideoHomeComponent;
  let fixture: ComponentFixture<ButtonVideoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonVideoHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonVideoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

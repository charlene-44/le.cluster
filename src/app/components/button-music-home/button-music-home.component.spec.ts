import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMusicHomeComponent } from './button-music-home.component';

describe('ButtonMusicHomeComponent', () => {
  let component: ButtonMusicHomeComponent;
  let fixture: ComponentFixture<ButtonMusicHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonMusicHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMusicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

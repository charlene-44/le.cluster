import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardHomeComponent } from './video-card-home.component';

describe('VideoCardHomeComponent', () => {
  let component: VideoCardHomeComponent;
  let fixture: ComponentFixture<VideoCardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCardHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

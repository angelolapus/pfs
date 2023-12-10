import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRichTextImgComponent } from './profile-rich-text-img.component';

describe('ProfileRichTextImgComponent', () => {
  let component: ProfileRichTextImgComponent;
  let fixture: ComponentFixture<ProfileRichTextImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileRichTextImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileRichTextImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

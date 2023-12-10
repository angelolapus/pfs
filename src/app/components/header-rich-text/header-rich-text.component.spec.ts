import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRichTextComponent } from './header-rich-text.component';

describe('HeaderRichTextComponent', () => {
  let component: HeaderRichTextComponent;
  let fixture: ComponentFixture<HeaderRichTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderRichTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderRichTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

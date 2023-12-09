import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardTextComponent } from './home-card-text.component';

describe('HomeCardComponent', () => {
  let component: HomeCardTextComponent;
  let fixture: ComponentFixture<HomeCardTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCardTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCardTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

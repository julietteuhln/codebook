import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEbookComponent } from './ajout-ebook.component';

describe('AjoutEbookComponent', () => {
  let component: AjoutEbookComponent;
  let fixture: ComponentFixture<AjoutEbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutEbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

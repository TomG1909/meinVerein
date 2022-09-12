import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitgliedBearbeitenComponent } from './mitglied-bearbeiten.component';

describe('MitgliedBearbeitenComponent', () => {
  let component: MitgliedBearbeitenComponent;
  let fixture: ComponentFixture<MitgliedBearbeitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitgliedBearbeitenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitgliedBearbeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

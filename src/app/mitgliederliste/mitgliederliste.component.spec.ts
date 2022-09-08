import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitgliederlisteComponent } from './mitgliederliste.component';

describe('MitgliederlisteComponent', () => {
  let component: MitgliederlisteComponent;
  let fixture: ComponentFixture<MitgliederlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitgliederlisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitgliederlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

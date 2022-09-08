import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitgliedAnlegenComponent } from './mitglied-anlegen.component';

describe('MitgliedAnlegenComponent', () => {
  let component: MitgliedAnlegenComponent;
  let fixture: ComponentFixture<MitgliedAnlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitgliedAnlegenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitgliedAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

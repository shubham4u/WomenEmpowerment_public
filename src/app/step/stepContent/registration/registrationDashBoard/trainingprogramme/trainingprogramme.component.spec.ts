import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingprogrammeComponent } from './trainingprogramme.component';

describe('TrainingprogrammeComponent', () => {
  let component: TrainingprogrammeComponent;
  let fixture: ComponentFixture<TrainingprogrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingprogrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingprogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

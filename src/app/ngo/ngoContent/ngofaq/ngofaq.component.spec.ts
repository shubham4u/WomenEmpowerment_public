import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgofaqComponent } from './ngofaq.component';

describe('NgofaqComponent', () => {
  let component: NgofaqComponent;
  let fixture: ComponentFixture<NgofaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgofaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgofaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

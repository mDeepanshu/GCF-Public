import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowOfIndividualComponent } from './flow-of-individual.component';

describe('FlowOfIndividualComponent', () => {
  let component: FlowOfIndividualComponent;
  let fixture: ComponentFixture<FlowOfIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowOfIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowOfIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

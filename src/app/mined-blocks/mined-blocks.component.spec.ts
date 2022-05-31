import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinedBlocksComponent } from './mined-blocks.component';

describe('MinedBlocksComponent', () => {
  let component: MinedBlocksComponent;
  let fixture: ComponentFixture<MinedBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinedBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinedBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

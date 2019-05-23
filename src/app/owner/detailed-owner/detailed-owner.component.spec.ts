import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedOwnerComponent } from './detailed-owner.component';

describe('DetailedOwnerComponent', () => {
  let component: DetailedOwnerComponent;
  let fixture: ComponentFixture<DetailedOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

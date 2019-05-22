import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOwnersComponent } from './lista-owners.component';

describe('ListaOwnersComponent', () => {
  let component: ListaOwnersComponent;
  let fixture: ComponentFixture<ListaOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

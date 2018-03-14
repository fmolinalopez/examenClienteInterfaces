import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPeliculasComponentComponent } from './lista-peliculas-component.component';

describe('ListaPeliculasComponentComponent', () => {
  let component: ListaPeliculasComponentComponent;
  let fixture: ComponentFixture<ListaPeliculasComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPeliculasComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPeliculasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

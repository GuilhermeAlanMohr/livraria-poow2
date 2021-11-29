import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraDetalheComponent } from './editora-detalhe.component';

describe('EditoraDetalheComponent', () => {
  let component: EditoraDetalheComponent;
  let fixture: ComponentFixture<EditoraDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoraDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoraDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialDetalheComponent } from './filial-detalhe.component';

describe('FilialDetalheComponent', () => {
  let component: FilialDetalheComponent;
  let fixture: ComponentFixture<FilialDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilialDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

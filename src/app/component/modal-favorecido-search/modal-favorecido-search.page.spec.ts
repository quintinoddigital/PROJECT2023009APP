import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalFavorecidoSearchPage } from './modal-favorecido-search.page';

describe('ModalFavorecidoSearchPage', () => {
  let component: ModalFavorecidoSearchPage;
  let fixture: ComponentFixture<ModalFavorecidoSearchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalFavorecidoSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

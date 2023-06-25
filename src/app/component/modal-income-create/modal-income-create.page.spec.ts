import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalIncomeCreatePage } from './modal-income-create.page';

describe('ModalIncomeCreatePage', () => {
  let component: ModalIncomeCreatePage;
  let fixture: ComponentFixture<ModalIncomeCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalIncomeCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

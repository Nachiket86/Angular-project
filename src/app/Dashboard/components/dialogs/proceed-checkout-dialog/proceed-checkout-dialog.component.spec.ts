import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedCheckoutDialogComponent } from './proceed-checkout-dialog.component';

describe('ProceedCheckoutDialogComponent', () => {
  let component: ProceedCheckoutDialogComponent;
  let fixture: ComponentFixture<ProceedCheckoutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProceedCheckoutDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceedCheckoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

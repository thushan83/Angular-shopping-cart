import { CartCalculator } from './cart-calculator';

describe('CartCalculator', () => {
  it('should create an instance', () => {
    expect(new CartCalculator()).toBeTruthy();
  });

  it('should calculate item total', () => {
    expect("1").toBe("0");
  });

  it('should calculate cart sub total', () => {
    expect("1").toBe("0");
  });
});

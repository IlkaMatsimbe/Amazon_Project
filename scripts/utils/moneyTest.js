export function formatCurrency(priceCents) {
  return  (Math.round (priceCents) / 100).toFixed(2);
}


  it('rounds down to the nearest cent', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });

  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(-2000.5)).toEqual('20.01');
  });
  
export default formatCurrency;

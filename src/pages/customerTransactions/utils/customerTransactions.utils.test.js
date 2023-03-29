import { calculateRewardPoints, calculateRewardPointsForMultipleTransactions } from "./customerTransactions.utils";

describe('customerTransactions utility functions', () => {
  it('calculate reward point of a transaction when amount is larger than second reward limit', () => {
    const points = calculateRewardPoints(120);

    expect(points).toEqual(90);
  });
  
  it('calculate reward point of a transaction when amount is between first and second reward limit', () => {
    const points = calculateRewardPoints(70);

    expect(points).toEqual(20);
  });
  
  it('calculate reward point of a transaction when amount is smaller than first reward limit', () => {
    const points = calculateRewardPoints(30);

    expect(points).toEqual(0);
  });

  it('calculate reward points of multiple transactions', () => {
    const points = calculateRewardPointsForMultipleTransactions([120, 70, 30]);

    expect(points).toEqual(110);
  });
});

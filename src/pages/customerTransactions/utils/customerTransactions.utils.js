export const FIRST_REWARD_LIMIT = 50;
export const SECOND_REWARD_LIMIT = 100;

export const calculateRewardPoints = (transaction) => {
  if (transaction > SECOND_REWARD_LIMIT) {
    return (transaction - SECOND_REWARD_LIMIT) * 2 + FIRST_REWARD_LIMIT;
  } else if (transaction <= SECOND_REWARD_LIMIT && transaction > FIRST_REWARD_LIMIT) {
    return transaction - FIRST_REWARD_LIMIT
  } else {
    return 0;
  }
};

export const calculateRewardPointsForMultipleTransactions = (transactions) => {
  const totalPoints = transactions.reduce((prev, transaction) => {
    return prev + calculateRewardPoints(transaction);
  }, 0);

  return totalPoints;
};

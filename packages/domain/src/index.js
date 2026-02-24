export const calculateBudgetRemaining = (budget) => {
    return Math.max(0, budget.allocatedAmount - budget.spentAmount);
};
export const calculateLiabilityPaid = (liability) => {
    return Math.max(0, liability.principalAmount - liability.outstandingAmount);
};

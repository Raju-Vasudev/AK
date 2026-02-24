export type CurrencyCode = 'INR' | 'USD' | 'EUR';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  currency: CurrencyCode;
  createdAt: string;
  updatedAt: string;
}

export interface Budget {
  id: string;
  profileId: string;
  name: string;
  period: 'monthly' | 'custom';
  allocatedAmount: number;
  spentAmount: number;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  profileId: string;
  budgetId: string;
  type: 'expense' | 'income';
  amount: number;
  note?: string;
  occurredOn: string;
  createdAt: string;
}

export interface Liability {
  id: string;
  profileId: string;
  lenderName: string;
  principalAmount: number;
  outstandingAmount: number;
  dueDate?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Repayment {
  id: string;
  liabilityId: string;
  amount: number;
  repaidOn: string;
  note?: string;
  createdAt: string;
}

export interface AppState {
  profile: UserProfile | null;
  budgets: Budget[];
  transactions: Transaction[];
  liabilities: Liability[];
  repayments: Repayment[];
}

export const calculateBudgetRemaining = (budget: Budget): number => {
  return Math.max(0, budget.allocatedAmount - budget.spentAmount);
};

export const calculateLiabilityPaid = (liability: Liability): number => {
  return Math.max(0, liability.principalAmount - liability.outstandingAmount);
};

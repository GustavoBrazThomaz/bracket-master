export function hasDatePassed(returnDate: Date): boolean {
  const today = new Date();
  const date = new Date(returnDate);

  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  return date < today;
}

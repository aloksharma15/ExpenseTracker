export const formatRupiah = (amount: number) => {
// Check if the amount is numeric
if (isNaN(amount)) {
  return 'Invalid amount';
}

// Check if the amount is negative
const isNegative = amount < 0;

// Convert the amount to positive if it's negative
const absoluteAmount = Math.abs(amount);

// Define the suffixes for each scale
const suffixes = ['', 'ribu', 'juta', 'milyar', 'triliun'];

// Determine the scale based on the number of digits
const scale = Math.floor((String(absoluteAmount).length - 1) / 3);

// Calculate the scaled amount
const scaledAmount = absoluteAmount / Math.pow(10, scale * 3);

// Format the scaled amount with two decimal places
const formattedAmount = scaledAmount.toLocaleString('id-ID', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Combine the formatted amount with the appropriate suffix
const result = (isNegative ? '-Rp ' : 'Rp ') + formattedAmount + ' ' + suffixes[scale];

return result;
};

export const formatDate = (timestamp: any) => {
  const date = new Date(timestamp);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  const formattedDate = new Intl.DateTimeFormat('id-ID', options as any).format(date);
  return formattedDate;
};
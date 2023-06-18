export const dateFormatter = new Intl.DateTimeFormat('en-GB')

export const priceFormatter = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'EUR',
})

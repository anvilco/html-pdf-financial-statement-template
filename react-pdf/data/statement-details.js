import { toUpperCaseFirstLetter } from '../lib/formatters'

const YEAR = new Date().getFullYear()
function generateDate (monthDay) {
  return `${YEAR}-${monthDay}`
}

function generateDescription ({
  type,
  amount,
  preposition,
  party,
}) {
  return `${toUpperCaseFirstLetter(type)} $${Math.abs(amount).toFixed(2)}${preposition ? ` ${preposition} ${party}` : ''}`
}

const TYPE_PURCHASE = 'purchase'
const TYPE_DEPOSIT = 'deposit'
const TYPE_WITHDRAWL = 'withdrawl'
const TYPE_SEND = 'send'
const TYPE_RECEIVE = 'receive'

const IP = '73.189.161.47'
const LOCATION = `Oakland, CA (${IP})`

const START_DATE = generateDate('11-01')
const END_DATE = generateDate('11-30')

const START_BALANCE = 12000

const transactions = [
  {
    date: generateDate('11-05'),
    amount: -12,
    fee: 0,
    type: TYPE_PURCHASE,
    preposition: 'at',
    party: 'Sammy\'s widgets'
  },
  {
    date: generateDate('11-06'),
    amount: -4,
    fee: 0,
    type: TYPE_PURCHASE,
    preposition: 'at',
    party: 'Acme Coffee Co.'
  },
  {
    date: generateDate('11-10'),
    amount: -140,
    fee: -0.14,
    type: TYPE_WITHDRAWL,
    preposition: 'at',
    party: 'Edgewood and Main st ATM'
  },
  {
    date: generateDate('11-15'),
    amount: 2000,
    fee: 0,
    type: TYPE_DEPOSIT,
    preposition: 'from',
    party: 'Eagleclaw productions payroll'
  },
  {
    date: generateDate('11-20'),
    amount: -100,
    fee: -0.10,
    type: TYPE_SEND,
    preposition: 'to',
    party: 'Pat Reynolds'
  },
  {
    date: generateDate('11-20'),
    amount: 50,
    fee: -1,
    type: TYPE_RECEIVE,
    preposition: 'from',
    party: 'Jane Lowell'
  },
]

export default {
  accountName: 'Alexis Smith'
  accountNumber: '123567744',
  startDate: START_DATE,
  endDate: END_DATE,
  startBalance: START_BALANCE,
  endBalance: transactions.reduce((acc, transaction) => (
    acc + transaction.amount
  ), START_BALANCE),
  totalFees: transactions.reduce((acc, transaction) => (
    acc + transaction.fee
  ), 0),
  transactions: transactions.map((transaction) => ({
    description: generateDescription(transaction),
    ...transaction,
  }))
}

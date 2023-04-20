import PropTypes from 'prop-types'; 
import { Table, Title, Data } from './transactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return (
        <Table class="transaction-history">
  <thead>
    <tr>
      <Title>Type</Title>
      <Title>Amount</Title>
      <Title>Currency</Title>
    </tr>
  </thead>

    <tbody>
          {items.map(item =>
            <tr key={item.id}>
              <Data>{item.type}</Data>
              <Data>{item.amount}</Data>
              <Data>{item.currency}</Data>
    </tr>
    )}
  </tbody>

  </Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
}

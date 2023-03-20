// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {listData} = props

  return (
    <div className="currency-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="img"
        />
      </div>
      <div className="list-container">
        <div className="lists-heading">
          <p className="name">Coin Type</p>
          <div>
            <h1 className="name">USD</h1>
            <h1 className="name">EURO</h1>
          </div>
        </div>
        <ul className="items-container">
          <CryptocurrencyItem data={listData} />
        </ul>
      </div>
    </div>
  )
}
export default CryptocurrenciesList

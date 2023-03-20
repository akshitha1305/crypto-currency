// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {data} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = data

  return (
    <li key={id} className="list-item">
      <div className="item-container">
        <img className="img" src={currencyLogo} alt={currencyName} />
        <p className="name">{currencyName}</p>
      </div>
      <div className="item-container">
        <p className="name name2">{usdValue}</p>
        <p className="name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

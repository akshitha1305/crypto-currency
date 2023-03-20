// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoList: []}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({
      isLoading: false,
      cryptoList: formattedData,
    })
  }

  render() {
    const {isLoading, cryptoList} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          cryptoList.map(each => (
            <CryptocurrenciesList listData={each} key={each.id} />
          ))
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker

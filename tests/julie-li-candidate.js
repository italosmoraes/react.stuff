import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'

// essa classe deveria ser o container das outras
// pois contem todas a logica do sistema, mas esta contida dentro de outros componentes
// eh confuso e nao representa bem o design de negocio da applicacao
class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			amount: this.props.loan.amount,
			available: this.props.loan.available,
			isActive: false,
			showWarning: false,
			investAmount: 0
		};

    // nao sei se isso eh necessario usando ES6
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // deveria ser um util separado
	formatToCurrency(value) {
		parseInt(value, 0)
		return value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  // deveria ser um util separado
	currencyUnformat(value) {
		return parseInt(value.replace(/,/g, ''))
  }
  

	subtractFromAmount(value) {
		value = this.currencyUnformat(value)
		value = parseInt(value, 10);
		value = value - this.state.investAmount;
		return this.formatToCurrency(value)
	}

	handleChange(event) {
		const value = parseInt(event.target.value, 0)
		const available = this.currencyUnformat(this.state.available)
		if (value < available) {
			this.setState(() => ({ investAmount: value }))
		} else {
			this.setState(() => ({
				investAmount: 0,
				showWarning: true
			}))
			event.target.value = '';
		}
	}
	handleSubmit(event) {
		event.preventDefault();
		this.setState((value) => ({
			investAmount: value,
			isOpen: !this.state.isOpen,
			isActive: true,
			available: this.subtractFromAmount(this.state.available),
			amount: this.subtractFromAmount(this.state.amount)
		}))
	}

	openModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		const { title, tranche, annualised_return, term_remaining, ltv, onClose } = this.props.loan
		const { isOpen, amount, isActive, available } = this.state;

    // found on stack exchange
    // honesta, muito legal
		function getDuration(milli) {
			let minutes = Math.floor(milli / 60000);
			let hours = Math.round(minutes / 60);
			let days = Math.round(hours / 24);

			return (
				(days && { value: days, unit: 'days' }) ||
				(hours && { value: hours, unit: 'hours' }) ||
				{ value: minutes, unit: 'minutes' }
			)
		}

    // deveria ser handled em um CardList Component
		let cardListClassName = 'card-list';
		if (isActive) {
			cardListClassName += ' card-list_active';
		}

		let format_term_remaining = getDuration(term_remaining);

    // muito html aqui. deveria soh Render some stuff
		return (
			<Fragment>
				<div className={cardListClassName}>
					<h3>{title}</h3>
					<ul className="flex-list">
						<li>Tranche: <b>{tranche}</b></li>
						<li>Available: <b>£ {available}</b></li>
						<li>Annualised return: <b>{annualised_return}%</b></li>
						<li>Term remaining: <b>{format_term_remaining.value + ': ' + format_term_remaining.unit}</b></li>
						<li>LTV: <b>{ltv}</b></li>
						<li>Amount: <b>£ {amount}</b></li>
					</ul>
					<div>
						<button className="button" onClick={this.openModal}>Invest</button>
					</div>
				</div>

				<Modal show={isOpen}
					onClose={this.toggleModal}
        > 
        {/* tudo isso deveria estar dentro de um componente proprio */}
        <h2>Invest in Loan</h2>
					<h3>{title}</h3>
					<div>Amount available: <b>£ {available}</b></div>
					<div>Loan ends in: <b>{format_term_remaining.value + ': ' + format_term_remaining.unit}</b></div>

					<form onSubmit={this.handleSubmit}>
						<label htmlFor="investAmount">Investment amount:</label>
						<input id="investAmount" placeholder="enter investment amount" type="number" onChange={this.handleChange} />
						<div className="footer">
							<button onClick={onClose} type='submit'>
								Invest
							</button>
						</div>
					</form>
					{/* TODO build a warning when the value goes over the amount */}
				</Modal>
			</Fragment>
		);
	}
}

ListItem.propTypes = {
	isOpen: PropTypes.bool,
	isActive: PropTypes.bool,
	// showWarning: PropTypes.bool,
	amount: PropTypes.string,
	available: PropTypes.string,
	investAmount: PropTypes.number
}

export default ListItem

import React from 'react';
import Cards from 'react-credit-cards-2';
import Payment from 'payment';
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from './creditCardUtils';

import 'react-credit-cards-2/es/styles-compiled.css';
import styled from 'styled-components';
import { getTicket } from '../../services/ticketsApi';
import { postPayment } from '../../services/paymentApi';

export default class CreditCardForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  }

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  }

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.form.reset();
  }

  render() {
    return (
      <>
        <Title>Pagamento</Title>
        <CreditCardDiv id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <Form onSubmit={(e) => {
            e.preventDefault();
            const number = Number(e.target[0].value.split(' ').join(''));
            const name = e.target[1].value;
            const expirationDate = e.target[2].value;
            const cvv = Number(e.target[3].value);

            const cardData = { number, name, expirationDate, cvv, issuer: Payment.fns.cardType(number) };

            const userData = localStorage.getItem('userData');
            const token = JSON.parse(userData).token;

            const promise = getTicket(token);
            promise.then(data => {
              const body = {
                ticketId: data.id, cardData
              };

              const postP = postPayment(token, body);
              postP.then((data) => window.location.reload());
            });
          }}>
            <Input
              type="tel"
              name="number"
              placeholder="Card Number"
              maxLength={19}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <Input
              type="tel"
              name="name"
              placeholder="Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />

            <div>
              <Input2
                type="tel"
                name="expiry"
                placeholder="date"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <Input2
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <Submit type="submit">Finalizar Pagamento</Submit>
          </Form>
        </CreditCardDiv>
      </>
    );
  }
}

const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #8E8E8E;

  margin-left: 35px;
  margin-bottom: 17px;
`;

const CreditCardDiv = styled.div`
  position: absolute;
  display: flex;
  margin-left: 35px;
`;

const Form = styled.form`
  margin-left: 40px;
  position: absolute;
  margin-left: 120%;
  div{
    display: flex;
    justify-content: flex-start;
  }
`;

const Input = styled.input`
  all:unset;
  width: 360px;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid black;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ::placeholder{
    text-align: center;
  }
    
`;

const Input2 = styled.input`
  all:unset;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ::placeholder{
    text-align: center;
  }
  
  &:nth-child(1) {
    width: 45%;
    margin-right:13px;
  }

  &:nth-child(2){
    width: 35%;
  }
`;

const Submit = styled.button`
  all: unset;
  width: 160px;
  height: 40px;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  margin-top: 37px;
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;

  cursor: pointer;
  position: relative;
  right: 95%;
`;

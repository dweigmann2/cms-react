import { Island } from '@hubspot/cms-components';
import TodoList from '../../islands/TodoList.jsx?island';
import Layout from '../../Layout.jsx';
import './grid.css';
import { Translation } from 'react-i18next';

import React, { useState } from 'react';
import './sales-portal.scss';

import background from "../../../images/BB1krATu.jpg";
import companjonLogo from '../../../images/companjon.png';
import noLogo from '../../../images/no-logo.png';


export const Component = ({ fieldValues, hublParameters = {} }) => {

  
  const [formData, setFormData] = useState({
    itemType: '',
    make: '',
    model: '',
    dateOfPurchase: '',
    purchaseCountry: '',
    residenceCountry: '',
    purchaseAmount: '',
    currency: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const {
    default_todo: defaultTodos,
    button_color: buttonColor,
    complete_todo_opacity: completeTodoOpacity,
  } = fieldValues;
  const { title } = hublParameters;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

 
  return (
    <>
    <div className="row row-content">
      <div className="col-md-5 left-side-content">
      
        <div className="header">
          <div className="logo">
            <img src={noLogo}  />
          </div>
          <div className="powered">  
          powered by
            <img src={companjonLogo}  /> 
          </div>
        </div>

        <div className="box-content">
          
          <h1>Extended Warranty and Purchase Protection</h1>
          <p> Extends your appliances manufacturer’s warranty, against defects and malfunctions beyond the standard period.</p>
          <p className='sub-p'>Please provide your device details below and click ‘Check eligibility’ to check your premium.</p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className='col-md-6 mb-3'>
                  <label for="item-type">Item type*</label>
                  <select className='input-style' id="model" name="model" required>
                    <option value="">Please select item type</option>
                    <option value="Item 1">Item 1</option>
                    <option value="Item 2">Item 2</option>
                    <option value="Item 3">Item 3</option>
                  </select>              
                </div>
              <div className='col-md-6 mb-3'>
                  <label for="item-type">Make*</label>
                  <select className='input-style' id="model" name="model" required>
                    <option value="">Please select brand</option>
                    <option value="Item 1">Item 1</option>
                    <option value="Item 2">Item 2</option>
                    <option value="Item 3">Item 3</option>
                  </select>  
              </div>
            </div>
            <div className='full-input-fild mb-3'>
              <label htmlFor="model">Model of item*</label>
              <select className='input-style' id="model" name="model" required>
                <option value="">Please select model</option>
                <option value="Television XPTO">Television XPTO</option>
                <option value="Laptop XPTO">Laptop XPTO</option>
                <option value="AirFrier XPTO">AirFrier XPTO</option>
              </select>
            </div>

            <div className='full-input-fild mb-3'>
                <label for="date-of-purchase">Date of purchase*</label>
                <input className='input-style' type="date" id="date-of-purchase" name="date-of-purchase" required />
            </div>
            
            <div className='full-input-fild mb-3'>
                <label for="purchase-country">Purchase Country*</label>
                <input className='input-style' type="text" id="purchase-country" name="purchase-country" required/>
            </div>
            <div className='full-input-fild mb-3'>
                <label for="residence-country">Residence Country*</label>
                <input className='input-style' type="text" id="residence-country" name="residence-country" required/>
            </div>
            <div className="row">
              <div className='col-md-6'>
                  <label for="purchase-amount">Purchase amount*</label>
                  <input className='input-style' type="text" id="Purchase amount" name="purchase-amount" required/>
              </div>
              <div className='col-md-6'>
                  <label for="currency">Currency*</label>
                  <input className='input-style' type="text" id="currency" name="currency" required/>
              </div>
            </div>
          <button type="submit" className='first-button'>Check eligibility</button>
          </form>
        </div>
        </div>
        <div className="col-md-7">
            <div className="right-side-content" style={{ backgroundImage: `url(${background})` }} > 
              <div className="lang-section">
                <div className="lang-content">
                  <span>Frequently asked questions</span>
                  <span>EN</span>
                  <span className='icon'></span>
                </div>
              </div>
              <div className="footer">
                <div className="menu">
                  <a href="">Privacy Notice</a> 
                  <a href="">Cookies Policy</a> 
                  <a href="">Terms & Conditions</a> 

                </div>
              </div>


              <div className="chat-content">
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46 0C20.5946 0 0 20.5946 0 46C0 71.4054 20.5946 92 46 92C71.4054 92 92 71.4054 92 46C92 20.5946 71.4054 0 46 0ZM25.3551 29.0111C25.3551 27.4275 26.6393 26.1457 28.2229 26.1457H28.4481C29.7491 17.6166 37.1115 11.052 46 11.052C54.8885 11.052 62.2509 17.6166 63.5519 26.1457H63.9113C65.4949 26.1457 66.7791 27.4275 66.7791 29.0111V31.3159C66.7791 32.8972 65.4949 34.1814 63.9113 34.1814H62.9649V35.2307C62.9649 38.2902 61.0339 42.4661 59.0741 44.4882C59.0908 44.6152 59.1052 44.7398 59.1052 44.8644C59.1052 46.1509 58.0558 47.2171 56.7525 47.2171C56.3452 47.2171 55.9691 47.1069 55.6408 46.92C54.9029 46.5439 54.4022 45.758 54.4022 44.8811V44.8644C54.4022 43.5634 55.4516 42.5141 56.7525 42.5141C57.0352 42.5141 57.3011 42.5596 57.5527 42.6698C59.0118 41.0861 60.6146 37.5523 60.6146 35.2307L60.6409 28.8291C60.6409 20.4245 53.5229 13.6515 44.9961 14.2217C37.2241 14.744 31.3591 21.5577 31.3591 29.3466V32.1593C31.3591 33.2757 30.4534 34.1814 29.337 34.1814H28.2229C26.6393 34.1814 25.3551 32.8972 25.3551 31.3159V29.0111ZM46 46.5079C39.3947 46.3929 34.5335 38.2088 34.5383 32.1976C34.5383 31.1075 34.5383 30.015 34.5383 28.9249C34.5048 22.8658 39.6654 17.6261 46 17.4632C52.3346 17.6261 57.4952 22.8658 57.4617 28.9249C57.4617 30.015 57.4617 31.1075 57.4617 32.1976C57.4665 38.2088 52.6053 46.3929 46 46.5079ZM69.7427 70.8568C69.7427 73.0418 67.9698 74.8123 65.7848 74.8123H26.2152C24.0302 74.8123 22.2573 73.0418 22.2573 70.8568V67.7182C22.2573 58.3865 29.579 50.7893 38.7885 50.2981L46 59.8024L53.2115 50.2981C62.421 50.7893 69.7427 58.3865 69.7427 67.7182V70.8568Z" fill="white"/>
              </svg>

              </div>
            </div>
        </div>
      </div>
    </>
  );

};


export { fields } from './fields.jsx';
export const meta = {
  label: `Todo List Module`,
};

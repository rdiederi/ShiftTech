
import React, {useEffect, useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Styles from '../components/Styles'
import { Form, Field } from 'react-final-form'
import Card from '../components/Card'
import CountyDropDown from '../components/CountyDropDown'
import CountrySelect from 'react-bootstrap-country-select';
import {
    formatCreditCardNumber,
    formatCVC,
    checkCountry,
    formatExpirationDate
} from '../components/cardUtils'

const CreditCardForm = props => {
    const [ country, setCountry ] = useState(null); 
    const onSubmit = async values => {
        values = {
            ...values,
            country
        }
        props.onSubmit(values)
    }

    if (!props.show) {
        return null
    }

    return (
        <Styles>
            <Form
                onSubmit={onSubmit}
                render={({
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values,
                    active
                }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className="justify-content-center">
                                <Card
                                    number={values.number || ''}
                                    name={values.name || ''}
                                    expiry={values.expiry || ''}
                                    cvc={values.cvc || ''}
                                    focused={active}
                                />
                            </div>
                            <div>
                                <Field
                                    name="number"
                                    component="input"
                                    type="text"
                                    pattern="[\d| ]{16,22}"
                                    placeholder="Card Number"
                                    format={formatCreditCardNumber}
                                />
                            </div>
                            <div>
                                <Field
                                    name="name"
                                    component="input"
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <Field
                                    name="expiry"
                                    component="input"
                                    type="text"
                                    pattern="\d\d/\d\d"
                                    placeholder="Valid Thru"
                                    format={formatExpirationDate}
                                />
                            </div>
                            <div>
                                <Field
                                    name="cvc"
                                    component="input"
                                    type="text"
                                    pattern="\d{3,4}"
                                    placeholder="CVC"
                                    format={formatCVC}
                                />
                            </div>
                            <div>
                                <CountrySelect
                                    value={country}
                                    onChange={setCountry}
                                    countryLabelFormatter={country => `${country.name} (${country.alpha2})`}
                                    className='w-100'
                                    // exclusions={[]}
                                />    
                            </div>
                            <div className="buttons">
                                <button type="submit" disabled={submitting}>
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {props.closeModal()}}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )
                }}
            />
        </Styles>
    );
}

export default CreditCardForm

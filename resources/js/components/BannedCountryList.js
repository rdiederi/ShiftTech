import React, {useEffect, useState} from 'react';
import { Table, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Styles from '../components/Styles'
import { Form, Field } from 'react-final-form'
import Card from '../components/Card'
import CountyDropDown from '../components/CountyDropDown'
import CountrySelect from 'react-bootstrap-country-select';
import * as Icon from 'react-bootstrap-icons';
import {
    formatCreditCardNumber,
    formatCVC,
    checkCountry,
    formatExpirationDate
} from '../components/cardUtils'

const BannedCountriesList = props => {
    const [ recentlyBannedCountry, setRecentlyBannedCountry ] = useState(null);

    const onSubmitBannedCountries = countries => {
        props.onSubmit(recentlyBannedCountry)
        setRecentlyBannedCountry(null)
    }

    const onRemoveBannedCountry = country => {
        props.onRemoveBannedCountry(country)
        setRecentlyBannedCountry(recentlyBannedCountry)
    }

    // window.alert(JSON.stringify(bannedCountry,2,0))

    if (!props.show) {
        return null
    }

    return (
        <Styles>
            <Form
                onSubmit={onSubmitBannedCountries}
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
                                <CountrySelect
                                    value={recentlyBannedCountry}
                                    onChange={setRecentlyBannedCountry}
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
                            {console.log("props.bannedCountries")}
                            {console.log(props.bannedCountries)}
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Banned Country</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {props.bannedCountries && props.bannedCountries.map((bannedCountry, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th >{bannedCountry.name}</th>
                                                    <th ><Icon.ArrowRight color="royalblue" size={96} /></th>
                                                </tr>
                                            )
                                        })}
                                </tbody>
                            </Table>
                        </form>
                    )
                }}
            />
        </Styles>
    );
}

export default BannedCountriesList

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CreditCardForm from '../components/CreditCardForm'
import { Table } from 'react-bootstrap';
import BannedCountriesList from '../components/BannedCountryList'
// const BannedCountries = {

// }

export default function Dashboard() {
    const [showShowCreditCard, setShowShowCreditCard] = useState(false);
    const [showBannedCountries, setShowBannedCountries] = useState(false);
    const [creditCards, setCreditCards] = useState([]);
    const [bannedCountries, setBannedCountries] = useState([]);
    const [country, setCountry] = useState(null);

    const handleShowCreditCard = () => setShowShowCreditCard(!showShowCreditCard);
    const handleShowBannedCountries = () => setShowBannedCountries(!showBannedCountries);

    const onSubmitCreditCard = async newCreditCard => {
        window.alert(JSON.stringify(newCreditCard,2,0))
        setCreditCards((oldCreditCards) => [...oldCreditCards, newCreditCard])
    }

    const onSubmitBannedCountries = async bannedCountry => {
        setBannedCountries((oldBannedCountries) => [...oldBannedCountries, bannedCountry])
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card text-center">
                        <h1>🏁 Shift Tech</h1>
                    </div>
                    <button className="btn btn-primary w-50" onClick={() => handleShowCreditCard()}>Add Credit Card</button>
                    <button className="btn btn-secondary w-50" onClick={() => handleShowBannedCountries()}>Add Banned Countries</button>
                </div>
            </div>
            <CreditCardForm
                closeModal={handleShowCreditCard}
                onSubmit={onSubmitCreditCard}
                show={showShowCreditCard}
            />
            <BannedCountriesList
                closeModal={handleShowBannedCountries}
                onSubmit={onSubmitBannedCountries}
                show={showBannedCountries}
                bannedCountries={bannedCountries}
            />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

// DOM element
if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}
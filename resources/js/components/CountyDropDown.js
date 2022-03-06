import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';

const CountyDropDown = ({selectCountry}) => {

  const [ value, setValue ] = useState(null); 

  return (
    <CountrySelect
      value={value}
      onChange={setValue}
      className='mt-2 mb-2'
    />
  );

};

export default CountyDropDown
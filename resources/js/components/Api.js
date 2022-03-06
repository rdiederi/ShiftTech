import React,{useState} from 'react'; 
import axios from 'axios';
import { templateSettings } from 'lodash';
import { Settings } from '../settings';

export default axios = {
    getCreditCards : (() => {
        axios.get(Settings.GetCreditCard)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })        
    }),
    postCreditCards : ((creditCardInformation) => {
        axios.post(Settings.SaveCreditCard, creditCardInformation)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })        
    })
}

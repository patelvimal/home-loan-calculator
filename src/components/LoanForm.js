import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputSlider from './InputSlider';

const LoanForm = () => {
  const LOAN_AMOUNT_DEFAULT_VALUE = 1;
  const MONTHLY_EMI_DEFAULT_VALUE = 50;
  const INTEREST_RATE_DEFAULT_VALUE = 9;
  const LOAN_TENURE_DEFAULT_VALUE = 1;
  const MONTHLY_PREPAYMENT_DEFAULT_VALUE = 0;

  const INITIAL_STATE = {
    loanAmount: LOAN_AMOUNT_DEFAULT_VALUE,
    emi: MONTHLY_EMI_DEFAULT_VALUE,
    interestRate: INTEREST_RATE_DEFAULT_VALUE,
    prePayment: MONTHLY_PREPAYMENT_DEFAULT_VALUE,
    loanTenure: LOAN_TENURE_DEFAULT_VALUE,
    calculateEMI: true,
  };
  const [loanInfo, setLoanInfo] = useState(INITIAL_STATE);
  const loanAmountMarker = generateMarker('L');
  const emiAmountMarker = generateMarker('K');
  const intRateMarker = generateMarker('%', 20, 2);
  const loanTenureMarker = generateMarker('', 30, 2);

  const onChange = (name, newValue) => {
    setLoanInfo(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const onSubmit = event => {
    if (props.onFormSubmit && typeof props.onFormSubmit === 'function') {
      props.onFormSubmit(loanInfo);
    }
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <View>
      <InputSlider
        label="Outstanding Loan Amount"
        min={0}
        max={100}
        step={1}
        defaultValue={LOAN_AMOUNT_DEFAULT_VALUE}
        onChange={onChange}
        name="loanAmount"
        markers={loanAmountMarker}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

const generateMarker = (suffix, maxValue, stepSize) => {
  var list = [];
  maxValue = maxValue || 100;
  stepSize = stepSize || 10;
  for (var i = 0; i <= maxValue; i += stepSize) {
    list.push({
      value: i,
      label: i !== 0 ? `${i}${suffix}` : 0,
    });
  }
  return list;
};

export default LoanForm;

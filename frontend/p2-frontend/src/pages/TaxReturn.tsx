import { useEffect, useState } from "react";
import { Fieldset, GridContainer, Grid, Label, TextInput } from '@trussworks/react-uswds';
// Importing styling
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import './styling/TaxReturn.css'; 

import { User } from "../Types";
import { useTranslation } from "react-i18next";

interface Props {
    user: User | undefined, // User data
    jwt: string // JWT token
}

export default function TaxReturn({ user, jwt }: Props) {
    const { t } = useTranslation(); // Translations
    
    // State variables for taxable income, amount owed, and tax rate
    const [taxableIncome, setTaxableIncome] = useState(0);
    const [amountOwed, setAmountOwed] = useState(0);
    const [taxRate, setTaxRate] = useState(0);

    // Formatting for USDollar
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    // Fetching data on component mount
    useEffect(() => {
        // Fetching tax information
        fetch(`http://localhost:8080/calculate/${user?.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
            .then(data => data.json()) // Parsing response data to JSON
            .then(returnedData => {
                // Setting state with returned data
                setTaxableIncome(returnedData.taxableIncome);
                setAmountOwed(returnedData.taxRefund);
                setTaxRate(returnedData.taxRate);
            })
            .catch(error => console.error(error)); // Handling errors
    }, []); // Running effect only once on component mount

    return (
        <div className="tax-return-container">
            <GridContainer>
                <Grid row>
                    <Grid col={12}>
                        {/* Heading for taxable income */}
                        <h1 className="tax-return-heading">{t('taxableIncome')}</h1>
                    </Grid>
                </Grid>

                <Grid row>

                    <Grid col={12}>

                        <Fieldset>

                            <div className="tax-input-box">
                                {/* Input fields for taxable income, tax rate, and amount owed */}
                                <div className="tax-input">
                                    <Label htmlFor="total-income" className="bold-label">{t('taxableIncome')}</Label>
                                    <TextInput id="total-income" name="taxable-income" type="text" value={`${USDollar.format(taxableIncome)}`} readOnly />
                                </div>
                                <div className="tax-input">
                                    <Label htmlFor="tax-rate" className="bold-label">{t('taxRate')}</Label>
                                    <TextInput id="tax-rate" name="tax-rate" type="text" value={`${taxRate * 100}%`} readOnly />
                                </div>
                                <div className="tax-input">
                                    {/* Conditional rendering based on amount owed */}
                                    {amountOwed < 0 ? (
                                        <>
                                            <Label htmlFor="amount-owed" className="bold-label">{t('taxOwed')}</Label>
                                            <TextInput id="amount-owed" name="tax-refund" type="text" value={`${USDollar.format(-1 * amountOwed)}`} readOnly />
                                        </>
                                    ) : (
                                        <>
                                            <Label htmlFor="amount-owed" className="bold-label">{t('taxRefund')}</Label>
                                            <TextInput id="amount-owed" name="tax-refund" type="text" value={`${USDollar.format(amountOwed)}`} readOnly />
                                        </>
                                    )
                                    }


                                </div>
                            </div>
                        </Fieldset>
                    </Grid>
                </Grid>
            </GridContainer>
        </div>
    );
}

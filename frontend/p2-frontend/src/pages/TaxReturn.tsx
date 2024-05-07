import { useEffect, useState } from "react";
import { Fieldset, GridContainer, Grid, Label, TextInput } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import './styling/TaxReturn.css'; // Assuming you have a separate CSS file for styling
import { User } from "../Types";

interface Props {
    user: User | undefined,
    jwt: string
}

export default function TaxReturn({ user, jwt }: Props) {
    const [taxableIncome, setTaxableIncome] = useState(0);
    const [amountOwed, setAmountOwed] = useState(0);
    const [taxRate, setTaxRate] = useState(0);

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        //fetch will default to a GET request
        console.log(user);
        fetch(`http://localhost:8080/calculate/${user?.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
            .then(data => data.json())
            .then(returnedData => {
                console.log(returnedData);
                setTaxableIncome(returnedData.taxableIncome);
                setAmountOwed(returnedData.taxRefund);
                setTaxRate(returnedData.taxRate);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="tax-return-container">
            <GridContainer>
                <Grid row>
                    <Grid col={12}>
                        <h1 className="tax-return-heading">Tax Breakdown</h1>
                    </Grid>
                </Grid>

                <Grid row>

                    <Grid col={12}>

                        <Fieldset>

                            <div className="tax-input-box">
                                <div className="tax-input">
                                    <Label htmlFor="total-income" className="bold-label">Taxable Income</Label>
                                    <TextInput id="total-income" name="taxable-income" type="text" value={`${USDollar.format(taxableIncome)}`} readOnly />
                                </div>
                                <div className="tax-input">
                                    <Label htmlFor="tax-rate" className="bold-label">Tax Rate</Label>
                                    <TextInput id="tax-rate" name="tax-rate" type="text" value={`${taxRate * 100}%`} readOnly />
                                </div>
                                <div className="tax-input">
                                    {amountOwed < 0 ? (
                                        <>
                                            <Label htmlFor="amount-owed" className="bold-label">Tax Owed</Label>
                                            <TextInput id="amount-owed" name="tax-refund" type="text" value={`${USDollar.format(-1 * amountOwed)}`} readOnly />
                                        </>
                                    ): (
                                        <>
                                            <Label htmlFor="amount-owed" className="bold-label">Tax Refund</Label>
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

import { useEffect, useState } from "react";
import { Fieldset, GridContainer, Grid, Label, TextInput } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import './styling/TaxReturn.css'; // Assuming you have a separate CSS file for styling

export default function TaxReturn() {
    const [totalIncome, setTotalIncome] = useState(0);
    const [amountOwed, setAmountOwed] = useState(0);
    const [taxRate, setTaxRate] = useState(0);
    useEffect(() => {
        //fetch will default to a GET request
        fetch('http://localhost:8080/users')
            .then(data => data.json())
            .then(returnedData => {
                setTotalIncome(returnedData.totalIncome);
                setAmountOwed(returnedData.amountOwed);
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
                                    <TextInput id="total-income" name="taxable-income" type="text" value={`$${totalIncome}`} readOnly />
                                </div>
                                <div className="tax-input">
                                    <Label htmlFor="tax-rate" className="bold-label">Tax Rate</Label>
                                    <TextInput id="tax-rate" name="tax-rate" type="text" value={`${taxRate}%`} readOnly />
                                </div>
                                <div className="tax-input">
                                    <Label htmlFor="amount-owed" className="bold-label">Tax Refund</Label>
                                    <TextInput id="amount-owed" name="tax-refund" type="text" value={`$${amountOwed}`} readOnly />
                                </div>
                            </div>
                        </Fieldset>
                    </Grid>
                </Grid>
            </GridContainer>
        </div>
    );
}

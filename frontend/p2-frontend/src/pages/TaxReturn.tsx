import { useState } from "react";
import { Fieldset, GridContainer, Grid, Label, TextInput } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'

export default function TaxReturn() {
    const [totalIncome, setTotalIncome] = useState(0);
    const [amountOwed, setAmountOwed] = useState(0);
    const [incomeAfterTaxes, setIncomeAfterTaxes] = useState(0);
    const [taxRate, setTaxRate] = useState(0);


    return (
        <>
            <div className="centered-content">
                <GridContainer>
                    <Grid row>
                        <Grid col={12}>
                            <h1 className="text-center">Tax Breakdown</h1>
                        </Grid>
                    </Grid>
                    <Grid row>
                        <Grid col={10}>
                            <Fieldset >
                                <div className="grid-row grid-gap">
                                    <div className="tablet:grid-col-6">
                                        <Label htmlFor="total-income" className="bold-label">Total Income</Label>
                                        <TextInput id="total-income" name="total-income" type="text" value={`$${totalIncome}`} readOnly />
                                    </div>
                                    <div className="tablet:grid-col-6">
                                        <Label htmlFor="amount-owed" className="bold-label">Amount Owed</Label>
                                        <TextInput id="amount-owed" name="amount-owed" type="text" value={`$${amountOwed}`} readOnly />
                                    </div>
                                    <div className="tablet:grid-col-6">
                                        <Label htmlFor="income-after-taxes" className="bold-label">Income After Taxes</Label>
                                        <TextInput id="income-after-taxes" name="income-after-taxes" type="text" value={`$${incomeAfterTaxes}`} readOnly />
                                    </div>
                                    <div className="tablet:grid-col-6">
                                        <Label htmlFor="tax-rate" className="bold-label">Tax Rate</Label>
                                        <TextInput id="tax-rate" name="tax-rate" type="text" value={`${taxRate}%`} readOnly />
                                    </div>
                                </div>
                            </Fieldset>
                        </Grid>
                    </Grid>
                </GridContainer>
            </div>
        </>
    )
}
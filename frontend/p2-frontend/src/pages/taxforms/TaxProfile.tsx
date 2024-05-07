import { Fieldset, StepIndicator, StepIndicatorStep, Grid, Form, Label, TextInput, Select, GridContainer, TextInputMask, FormGroup, DateInput, DateInputGroup } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'

export default function TaxProfile() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevents the default form submission behavior
        console.log('Form submitted'); // Replace with your form submission logic
    };
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <StepIndicator
                    counters="default"
                    headingLevel="h4"
                    ofText="of"
                    stepText="Step"
                >
                    <StepIndicatorStep
                        label="Personal information"
                        status="current"
                    />
                    <StepIndicatorStep label="Filing status" />
                    <StepIndicatorStep label="W2 Form" />
                    <StepIndicatorStep label="1099 Form" />
                    <StepIndicatorStep label="Review and submit" />
                </StepIndicator>

                <Fieldset>
                    <GridContainer className="usa-section">
                        <Grid row={true} className="flex-justify-center">
                            <Grid col={12} tablet={{ col: 12 }} desktop={{ col: 10 }} className="centered-grid">
                                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter rounded">
                                    <h1 className="margin-bottom-2 text-center">Update User Profile</h1>
                                    <Form onSubmit={handleSubmit}>
                                        <Fieldset>
                                            <Grid row gap={2}>
                                                <Grid tablet={{ col: 6 }}>
                                                    <Label htmlFor="first-name">First Name</Label>
                                                    <TextInput id="first-name" name="first-name" type="text" required />
                                                </Grid>
                                                <Grid tablet={{ col: 6 }}>
                                                    <Label htmlFor="last-name">Last Name</Label>
                                                    <TextInput id="last-name" name="last-name" type="text" required />
                                                </Grid>
                                                <Grid tablet={{ col: 8 }}>
                                                    <Label htmlFor="ssn" className="margin-top-2">Social Security Number</Label>
                                                    <TextInputMask id="ssn" name="ssn" type="text" mask="___ __ ____" pattern="^(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}$" required />
                                                </Grid>
                                            </Grid>

                                            <Grid row >
                                                <Grid tablet={{ col: 6 }}>
                                                    <Label htmlFor="dob" className="margin-top-1 bold-label">Date of Birth</Label>
                                                    <DateInputGroup>
                                                        <FormGroup className="usa-form-group--month usa-form-group--select">
                                                            <Label htmlFor="input-select">Month</Label>
                                                            <Select id="testDateInput" name="testDateInput">
                                                                <option>- Select -</option>
                                                                <option value="1">01 - January</option>
                                                                <option value="2">02 - February</option>
                                                                <option value="3">03 - March</option>
                                                                <option value="4">04 - April</option>
                                                                <option value="5">05 - May</option>
                                                                <option value="6">06 - June</option>
                                                                <option value="7">07 - July</option>
                                                                <option value="8">08 - August</option>
                                                                <option value="9">09 - September</option>
                                                                <option value="10">10 - October</option>
                                                                <option value="11">11 - November</option>
                                                                <option value="12">12 - December</option>
                                                            </Select>
                                                        </FormGroup>
                                                        <DateInput id="testDateInput" name="testName" label="Day" unit="day" maxLength={2} minLength={2} />
                                                        <DateInput id="testDateInput" name="testName" label="Year" unit="year" maxLength={4} minLength={4} />
                                                    </DateInputGroup>
                                                </Grid>
                                            </Grid>

                                            <Grid row gap={2}>
                                                <Grid tablet={{ col: 8 }}>
                                                    <Label htmlFor="mailing-address-1">Street address</Label>
                                                    <TextInput id="mailing-address-1" name="mailing-address-1" type="text" required />
                                                </Grid>
                                                <Grid tablet={{ col: 4 }}>
                                                    <Label htmlFor="city">City</Label>
                                                    <TextInput id="city" name="city" type="text" required />
                                                </Grid>
                                                <Grid tablet={{ col: 6 }}>
                                                    <Label htmlFor="state">State</Label>
                                                    <Select id="state" name="state" required>
                                                        <option>- Select -</option>
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option>
                                                    </Select>
                                                </Grid>

                                                <Grid tablet={{ col: 6 }}>
                                                    <Label htmlFor="zip">ZIP Code</Label>
                                                    <TextInput id="zip" name="zip" type="text" inputSize="medium" pattern="[\d]{5}(-[\d]{4})?" required />
                                                </Grid>
                                            </Grid>
                                        </Fieldset>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <ul className="usa-button-group">
                                                <li className="usa-button-group__item">
                                                    <a href="/" className="usa-button usa-button--outline">Back</a>
                                                </li>
                                                <li className="usa-button-group__item">
                                                    <button type="submit" className="usa-button">Continue</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </Form>
                                </div>
                            </Grid>
                        </Grid>
                    </GridContainer>
                </Fieldset>

            </div>
        </>
    )
}
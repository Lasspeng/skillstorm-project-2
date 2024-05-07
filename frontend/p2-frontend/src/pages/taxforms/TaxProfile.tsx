import { Fieldset, StepIndicator, StepIndicatorStep, Grid, Form, Label, TextInput, Select, GridContainer, TextInputMask, FormGroup, DateInput, DateInputGroup } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { User } from '../../Types';
import { useEffect } from 'react';

interface Props {
    user: User | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>,
    jwt: string
}

export default function TaxProfile({ user, setUser, jwt }: Props) {
    const handleSubmit = (event: any) => {

        event.preventDefault();
        const data = new FormData(event.target);

        // Add a 0 to the month and day of DOB if they're below 10
        let month = data.get("dobMonth") as string;
        if (month !== null && month.length === 1) {
            month = `0${month}`;
        }
        let day = data.get("dobDay") as string;
        if (day !== null && month.length === 1) {
            day = `0${day}`;
        }

        // Convert dob data into a Java and Postgresql compatible format
        const dateOfBirth = `${data.get("dobYear")}-${month}-${day}` 

        const updatedAccountInfo = {
            firstName: data.get("first-name"),
            lastName: data.get("last-name"),
            dateOfBirth: dateOfBirth,
            socialSecurity: data.get("ssn"),
            streetAddress: data.get("mailing-address-1"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip")
        }

        const updatedUser = Object.assign({}, user, updatedAccountInfo);
        console.log(updatedUser);

        fetch('http://localhost:8080/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(updatedUser)
        })
        .then(data => data.json())
        .then(userData => {
            setUser(userData);
            alert("Your account has been successfully updated");
        })
        .catch((error) => console.error(error));
    };

    useEffect (() => {
        console.log(user);
    }, [user]);
    
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
                            <Grid col={12} tablet={{ col: 8 }} desktop={{ col: 10 }} className="centered-grid">
                                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter rounded">
                                    <h1 className="margin-bottom-2 text-center">Update User Profile</h1>
                                    <Form onSubmit={handleSubmit}>
                                        <Fieldset>
                                            <div className="grid-row grid-gap">

                                                <Label htmlFor="first-name">First Name</Label>
                                                <TextInput id="first-name" name="first-name" type="text" value={user?.firstName}/>
                                                <Label htmlFor="last-name">Last Name</Label>
                                                <TextInput id="last-name" name="last-name" type="text" value={user?.lastName} />

                                            </div>

                                            <Label htmlFor="dob" className="margin-top-2">Date of Birth</Label>
                                            <DateInputGroup>
                                                <FormGroup className="usa-form-group--month usa-form-group--select">
                                                    <Label htmlFor="input-select">Month</Label>
                                                    <Select id="testDateInput" name="testDateInput" value={user?.dateOfBirth.substring(5, 7)}>
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
                                                <DateInput id="testDateInput" name="testName" label="Day" unit="day" maxLength={2} minLength={2} value={user?.dateOfBirth.substring(8)} />
                                                <DateInput id="testDateInput" name="testName" label="Year" unit="year" maxLength={4} minLength={4} value={user?.dateOfBirth.substring(0, 4)}/>
                                            </DateInputGroup>

                                            <Label htmlFor="ssn" className="margin-top-2">Social Security Number</Label>
                                            <TextInputMask id="ssn" name="ssn" type="text" mask="___ __ ____" pattern="^(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}$" value={`${user?.socialSecurity.substring(0, 3)} ${user?.socialSecurity.substring(4, 6)} ${user?.socialSecurity.substring(7)}`} />

                                            <Label htmlFor="mailing-address-1">Street address</Label>
                                            <TextInput id="mailing-address-1" name="mailing-address-1" type="text" value={user?.streetAddress} />

                                            {/* <Label htmlFor="mailing-address-2">Street address line 2</Label>
                                            <TextInput id="mailing-address-2" name="mailing-address-2" type="text" /> */}

                                            <div className="grid-row grid-gap">
                                                <div className="tablet:grid-col-6">
                                                    <Label htmlFor="city">
                                                        City
                                                    </Label>
                                                    <TextInput id="city" name="city" type="text" required value={user?.city} />
                                                </div>
                                                <div className="tablet:grid-col-6">
                                                    <Label htmlFor="state">
                                                        State
                                                    </Label>
                                                    <Select id="state" name="state" value={user?.state} required>
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
                                                </div>
                                            </div>
                                            <Label htmlFor="zip">ZIP Code</Label>
                                            <TextInput id="zip" name="zip" type="text" inputSize="medium" pattern="[\d]{5}(-[\d]{4})?" value={user?.zipCode} />
                                        </Fieldset>
                                    </Form>
                                </div>
                            </Grid>
                        </Grid>
                    </GridContainer>
                </Fieldset>
                <div style={{ marginBottom: '20px'}}>
                <ul className="usa-button-group">
                    <li className="usa-button-group__item">
                        <a href="/" className="usa-button usa-button--outline">Back</a>
                    </li>
                    <li className="usa-button-group__item">
                        <a href="/filingstatus" className="usa-button">Continue</a>
                    </li>
                </ul>
                </div>
            </div>
        </>
    )
}

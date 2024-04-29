import { Form, Fieldset, Label, TextInput, Select, GridContainer } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import './Profile.css';

export default function Profile() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevents the default form submission behavior
        console.log('Form submitted'); // Replace with your form submission logic
    };


    return (
        <>
            <div className="centered-box">
                <GridContainer>
                    <h1>User Profile</h1>
                    <Form onSubmit={handleSubmit}>
                        <Fieldset legend="Name" legendStyle="large">
                            <Label htmlFor="first-name">First Name</Label>
                            <TextInput id="first-name" name="first-name" type="text" />
                            <Label htmlFor="last-name">Last Name</Label>
                            <TextInput id="last-name" name="last-name" type="text" />
                        </Fieldset>
                        <h1></h1>
                        <Fieldset legend="Mailing address" legendStyle="large">
                            <Label htmlFor="mailing-address-1">Street address</Label>
                            <TextInput id="mailing-address-1" name="mailing-address-1" type="text" />

                            <Label htmlFor="mailing-address-2">Street address line 2</Label>
                            <TextInput id="mailing-address-2" name="mailing-address-2" type="text" />

                            <Label htmlFor="city">
                                City
                            </Label>
                            <TextInput id="city" name="city" type="text" required />

                            <Label htmlFor="state">
                                State
                            </Label>
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

                            <Label htmlFor="zip">ZIP Code</Label>
                            <TextInput id="zip" name="zip" type="text" inputSize="medium" pattern="[\d]{5}(-[\d]{4})?" />

                        </Fieldset>
                    </Form>
                </GridContainer>
            </div>
        </>
    )
}
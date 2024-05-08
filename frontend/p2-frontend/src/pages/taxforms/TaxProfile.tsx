import { Fieldset, StepIndicator, StepIndicatorStep, Grid, Form, Label, TextInput, Select, GridContainer, TextInputMask, FormGroup, DateInput, DateInputGroup } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { User } from '../../Types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
    user: User | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>,
    jwt: string
}

export default function TaxProfile({ user, setUser, jwt }: Props) {
    const { t } = useTranslation();
    const navigate = useNavigate();

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
                navigate('/filingstatus')
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
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
                        label={t('personalInformation')}
                        status="current"
                    />
                    <StepIndicatorStep label={t('filingStatus')} />
                    <StepIndicatorStep label={t('w2Form')} />
                    <StepIndicatorStep label={t('form1099')} />
                    <StepIndicatorStep label={t('reviewAndSubmit')} />
                </StepIndicator>

                <Fieldset>
                    <GridContainer className="usa-section">
                        <Grid row={true} className="flex-justify-center">
                            <Grid col={12} tablet={{ col: 12 }} desktop={{ col: 10 }} className="centered-grid">
                                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter rounded">
                                    <h1 className="margin-bottom-2 text-center">{t('updateUserProfile')}</h1>
                                    <Form onSubmit={handleSubmit}>
                                        <Fieldset>
                                            <Grid row gap={2}>
                                                <Grid tablet={{ col: 6 }}>
                                                    <Label htmlFor="first-name">{t('firstName')}</Label>
                                                    <TextInput id="first-name" name="first-name" type="text" defaultValue={user?.firstName} required />
                                                </Grid>
                                                <Grid tablet={{ col: 6 }}>
                                                    <Label htmlFor="last-name">{t('lastName')}</Label>
                                                    <TextInput id="last-name" name="last-name" type="text" defaultValue={user?.lastName} required />
                                                </Grid>
                                                <Grid tablet={{ col: 8 }}>
                                                    <Label htmlFor="ssn" className="margin-top-2">{t('socialSecurityNumber')}</Label>
                                                    <TextInputMask id="ssn" name="ssn" type="text" mask="___ __ ____" pattern="^(?!(000|666|9))\d{3} (?!00)\d{2} (?!0000)\d{4}$" defaultValue={`${user?.socialSecurity.substring(0, 3)} ${user?.socialSecurity?.substring(4, 6)} ${user?.socialSecurity?.substring(7)}`} required />
                                                </Grid>
                                            </Grid>

                                            <Grid row >
                                                <Grid tablet={{ col: 6 }}>
                                                    <Label htmlFor="dob" className="margin-top-1 bold-label">{t('dateOfBirth')}</Label>
                                                    <DateInputGroup>
                                                        <FormGroup className="usa-form-group--month usa-form-group--select">
                                                            <Label htmlFor="input-select">{t('month')}</Label>
                                                            <Select id="testDateInput" name="dobMonth" defaultValue={user?.dateOfBirth.substring(5, 7)} >
                                                                <option>- {t('select')} -</option>
                                                                <option value="01">01 - {t('january')}</option>
                                                                <option value="02">02 - {t('february')}</option>
                                                                <option value="03">03 - {t('march')}</option>
                                                                <option value="04">04 - {t('april')}</option>
                                                                <option value="05">05 - {t('may')}</option>
                                                                <option value="06">06 - {t('june')}</option>
                                                                <option value="07">07 - {t('july')}</option>
                                                                <option value="08">08 - {t('august')}</option>
                                                                <option value="09">09 - {t('september')}</option>
                                                                <option value="10">10 - {t('october')}</option>
                                                                <option value="11">11 - {t('november')}</option>
                                                                <option value="12">12 - {t('december')}</option>
                                                            </Select>
                                                        </FormGroup>
                                                        <DateInput id="testDateInput" name="dobDay" label={t('day')} unit="day" maxLength={2} minLength={2} defaultValue={user?.dateOfBirth.substring(8)} />
                                                        <DateInput id="testDateInput" name="dobYear" label={t('year')} unit="year" maxLength={4} minLength={4} defaultValue={user?.dateOfBirth.substring(0, 4)} />
                                                    </DateInputGroup>
                                                </Grid>
                                            </Grid>

                                            <Grid row gap={2}>
                                                <Grid tablet={{ col: 8 }}>
                                                    <Label htmlFor="mailing-address-1">{t('streetAddress')}</Label>
                                                    <TextInput id="mailing-address-1" name="mailing-address-1" type="text" defaultValue={user?.streetAddress} required />
                                                </Grid>
                                                <Grid tablet={{ col: 4 }}>
                                                    <Label htmlFor="city">{t('city')}</Label>
                                                    <TextInput id="city" name="city" type="text" defaultValue={user?.city} required />
                                                </Grid>
                                                <Grid tablet={{ col: 6 }}>
                                                    <Label htmlFor="state">{t('state')}</Label>
                                                    <Select id="state" name="state" defaultValue={user?.state} required>
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
                                                <Label htmlFor="zip">{t('zipCode')}</Label>
                                                    <TextInput id="zip" name="zip" type="text" inputSize="medium" pattern="[\d]{5}(-[\d]{4})?" defaultValue={user?.zipCode} required />
                                                </Grid>
                                            </Grid>
                                        </Fieldset>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <ul className="usa-button-group">
                                                <li className="usa-button-group__item">
                                                    <button onClick={() => navigate('/')} className="usa-button usa-button--outline">{t('back')}</button>
                                                </li>
                                                <li className="usa-button-group__item">
                                                    <button type="submit" className="usa-button">{t('continue')}</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </Form>
                                </div>
                            </Grid>
                        </Grid>
                    </GridContainer>
                </Fieldset>

            </div >
        </>
    )
}

// Importing trussworks elements
import { Fieldset, Form, Grid, Label, StepIndicator, StepIndicatorStep, TextInput } from '@trussworks/react-uswds';
// Importing styling
import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { User } from '../../Types';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
    user: User | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>,
    jwt: string
}

export default function W2Form({ user, setUser, jwt }: Props) {
    const { t } = useTranslation(); // Translations
    const navigate = useNavigate(); // Navigation function

    // Handle form submission
    const handleSubmit = (event: any) => {
        event.preventDefault(); // Prevent default form submission
        const data = new FormData(event.target); // Get form data

        // Updated form info
        const updatedFormInfo = {
            formW2: {
                id: user?.formW2.id,
                wages: data.get("income"),
                taxWithheld: data.get("withheld")
            }
        }

        // Merge updated form info with user data
        const updatedUser = Object.assign({}, user, updatedFormInfo);

        // Update user data on the server
        fetch('http://localhost:8080/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(updatedUser)
        })
        .then(response => response.json())
        .then(userData => {
            setUser(userData); // Update user state
            navigate('/form1099'); // Navigate to the next step
        })
        .catch((error) => console.error(error));
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
                        label={t('personalInformation')}
                        status="complete"
                    />
                    <StepIndicatorStep
                        label={t('filingStatus')}
                        status="complete"
                    />
                    <StepIndicatorStep
                        label={t('w2Form')}
                        status="current"
                    />
                    <StepIndicatorStep label={t('form1099')} />
                    <StepIndicatorStep label={t('reviewAndSubmit')} />
                </StepIndicator>

                <Fieldset>

                    <Grid row={true} className="flex-justify-center">
                        <Grid col={12} tablet={{ col: 10 }} desktop={{ col: 10 }} className="centered-grid">
                            <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter rounded">
                                <h1 className="margin-bottom-2 text-center">{t('w2Form')} Info</h1>
                                <Form onSubmit={handleSubmit}>
                                    <Fieldset>
                                        <div className="grid-row grid-gap">

                                            <Label htmlFor="income">{t('income')}</Label>
                                            <TextInput id="income" name="income" type="text" defaultValue={user?.formW2.wages} required/>
                                            <Label htmlFor="withheld">{t('amountWithheld')}</Label>
                                            <TextInput id="withheld" name="withheld" type="text" defaultValue={user?.formW2.taxWithheld} required />

                                        </div>
                                    </Fieldset>
                                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center'}}>
                                        <ul className="usa-button-group">
                                            <li className="usa-button-group__item">
                                                <button onClick={() => navigate('/filingstatus')}className="usa-button usa-button--outline">{t('back')}</button>
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
                </Fieldset>
            </div>
        </>
    )
}

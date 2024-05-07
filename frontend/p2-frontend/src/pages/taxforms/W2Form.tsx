import { Fieldset, Form, Grid, Label, StepIndicator, StepIndicatorStep, TextInput } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/index.css';
import '@trussworks/react-uswds/lib/uswds.css';
import { User } from '../../Types';
import { useNavigate } from 'react-router-dom';

interface Props {
    user: User | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>,
    jwt: string
}

export default function W2Form({ user, setUser, jwt }: Props) {

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        
        event.preventDefault(); 
        const data = new FormData(event.target);

        const updatedFormInfo = {
            formW2: {
                id: user?.formW2.id,
                wages: data.get("income"),
                taxWithheld: data.get("withheld")
            }
        }

        const updatedUser = Object.assign({}, user, updatedFormInfo);

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
            setUser(userData);
            navigate('/review');
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
                        label="Personal information"
                        status="complete"
                    />
                    <StepIndicatorStep
                        label="Filing status"
                        status="complete"
                    />
                    <StepIndicatorStep
                        label="W2 Form"
                        status="current"
                    />
                    <StepIndicatorStep label="1099 Form" />
                    <StepIndicatorStep label="Review and submit" />
                </StepIndicator>

                <Fieldset>

                    <Grid row={true} className="flex-justify-center">
                        <Grid col={12} tablet={{ col: 8 }} desktop={{ col: 10 }} className="centered-grid">
                            <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter rounded">
                                <h1 className="margin-bottom-2 text-center">W2 Form Info</h1>
                                <Form onSubmit={handleSubmit}>
                                    <Fieldset>
                                        <div className="grid-row grid-gap">

                                            <Label htmlFor="income">Income</Label>
                                            <TextInput id="income" name="income" type="text" />
                                            <Label htmlFor="withheld">Amount Withheld</Label>
                                            <TextInput id="withheld" name="withheld" type="text" />

                                        </div>
                                    </Fieldset>
                                </Form>
                            </div>
                        </Grid>
                    </Grid>
                </Fieldset>
                <div style={{ marginTop: '20px' }}>
                    <ul className="usa-button-group">
                        <li className="usa-button-group__item">
                            <a href="/filingstatus" className="usa-button usa-button--outline">Back</a>
                        </li>
                        <li className="usa-button-group__item">
                            <a href="/form1099" className="usa-button">Continue</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

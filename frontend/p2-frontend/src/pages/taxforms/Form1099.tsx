import { Fieldset, StepIndicator, StepIndicatorStep, Grid, Form, Label, TextInput } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { User } from '../../Types';
import { useNavigate } from 'react-router-dom';

interface Props {
    user: User | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>,
    jwt: string
}

export default function Form1099({ user, setUser, jwt }: Props) {

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {

        event.preventDefault(); 
        const data = new FormData(event.target);

        // Create new object with updated data
        const updatedAccountInfo = {
            formW2: {    
                wages: data.get("income"),
                taxWriteOffs: data.get("deductions")
            }
        }

        setUser((prevState) => {
            return {updatedAccountInfo, ...prevState } as User;
        });

        fetch('http://localhost:8080/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(updatedAccountInfo)
        })
        .then(response => response.json())
        .then(userData => {
            setUser(userData);
            navigate('/review');
            // alert("Your account has been successfully updated");
        })
        .catch(() => alert("An error has occured. Try again"));
    }

        
    ;

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
                        status="complete"
                    />
                    <StepIndicatorStep
                        label="1099 Form"
                        status="current"
                    />
                    <StepIndicatorStep label="Review and submit" />
                </StepIndicator>

                <Fieldset>

                    <Grid row={true} className="flex-justify-center">
                        <Grid col={12} tablet={{ col: 8 }} desktop={{ col: 10 }} className="centered-grid">
                            <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter rounded">
                                <h1 className="margin-bottom-2 text-center">1099 Form Info</h1>
                                <Form onSubmit={handleSubmit}>
                                    <Fieldset>
                                        <div className="grid-row grid-gap">

                                            <Label htmlFor="income">Income</Label>
                                            <TextInput id="income" name="income" type="text" />
                                            <Label htmlFor="deductions">Deductions</Label>
                                            <TextInput id="deductions" name="deductions" type="text" />

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
                            <a href="/w2form" className="usa-button usa-button--outline">Back</a>
                        </li>
                        <li className="usa-button-group__item">
                            <a href="/review" className="usa-button">Continue</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

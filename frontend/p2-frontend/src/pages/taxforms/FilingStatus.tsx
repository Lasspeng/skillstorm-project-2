import { StepIndicator, StepIndicatorStep, Radio, Fieldset } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { useNavigate } from 'react-router-dom';
import { User } from '../../Types';

interface Props {
    user: User | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>,
    jwt: string
}

export default function FilingStatus({ user, setUser, jwt }: Props) {

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        // TODO: Grab radio button and update User
        const updatedUser = null;

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
            navigate('/w2form');
        })
        .catch((error) => console.error(error));
    }


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
                        status="current"
                    />
                    <StepIndicatorStep label="W2 Form" />
                    <StepIndicatorStep label="1099 Form" />
                    <StepIndicatorStep label="Review and submit" />
                </StepIndicator>
                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter rounded">
                <Fieldset legend="Filing Status" legendStyle="large" >
                    <Radio id="single" name="filing-status" defaultChecked label="Single" value="single" />
                    <Radio id="jointly" name="filing-status" label="Jointly" value="jointly" />
                </Fieldset>
                </div>

            <div style={{ marginTop: '20px'}}>
                <ul className="usa-button-group">
                    <li className="usa-button-group__item">
                        <a href="/taxprofile" className="usa-button usa-button--outline">Back</a>
                    </li>
                    <li className="usa-button-group__item">
                        <a href="/w2form" className="usa-button" onClick={handleSubmit}>Continue</a>
                    </li>
                </ul>
            </div>
            </div>
        </>
    )
}

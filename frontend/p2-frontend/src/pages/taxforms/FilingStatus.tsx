import { StepIndicator, StepIndicatorStep, Radio, Fieldset } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { SetStateAction, useState } from 'react';

export default function FilingStatus() {
    const [filingStatus, setFilingStatus] = useState('Single');

    const handleFilingStatusChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setFilingStatus(event.target.value);
    };
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '200px' }}>
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
                        <Radio id="single" name="filing-status" defaultChecked label="Single" value="Single" onChange={handleFilingStatusChange} />
                        <Radio id="jointly" name="filing-status" label="Jointly" value="Jointly" onChange={handleFilingStatusChange} />

                        <div style={{ marginTop: '20px' }}>
                            <ul className="usa-button-group">
                                <li className="usa-button-group__item">
                                    <a href="/taxprofile" className="usa-button usa-button--outline">Back</a>
                                </li>
                                <li className="usa-button-group__item">
                                    <a href="/w2form" className="usa-button">Continue</a>
                                </li>
                            </ul>
                        </div>
                    </Fieldset>
                </div>


            </div>
        </>
    )
}
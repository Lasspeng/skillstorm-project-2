import { StepIndicator, StepIndicatorStep } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'

export default function Form1099() {
    return (
        <>
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
            <ul className="usa-button-group">
                <li className="usa-button-group__item">
                    <a href="/w2form" className="usa-button usa-button--outline">Back</a>
                </li>
                <li className="usa-button-group__item">
                    <a href="/review" className="usa-button">Continue</a>
                </li>
            </ul>
        </>
    )
}
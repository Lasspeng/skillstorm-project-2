import { StepIndicator, StepIndicatorStep, Radio } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'

export default function FilingStatus() {
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
                    status="current"
                />
                <StepIndicatorStep label="W2 Form" />
                <StepIndicatorStep label="1099 Form" />
                <StepIndicatorStep label="Review and submit" />
            </StepIndicator>

            <Radio id="input-radio" name="input-radio" label="My Radio Button" />

            <ul className="usa-button-group">
                <li className="usa-button-group__item">
                    <a href="/taxprofile" className="usa-button usa-button--outline">Back</a>
                </li>
                <li className="usa-button-group__item">
                    <a href="/w2form" className="usa-button">Continue</a>
                </li>
            </ul>
        </>
    )
}
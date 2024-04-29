import { StepIndicator, StepIndicatorStep } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'

export default function TaxForm() {
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
                    label="Household status"
                    status="complete"
                />
                <StepIndicatorStep
                    label="Supporting documents"
                    status="current"
                />
                <StepIndicatorStep label="Signature" />
                <StepIndicatorStep label="Review and submit" />
            </StepIndicator>
        </>
    )
}
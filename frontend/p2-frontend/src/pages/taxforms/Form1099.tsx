import { Fieldset, StepIndicator, StepIndicatorStep, Grid, Form, Label, TextInput } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'

export default function Form1099() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevents the default form submission behavior
        console.log('Form submitted'); // Replace with your form submission logic
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
                        <Grid col={12} tablet={{ col: 10 }} desktop={{ col: 10 }} className="centered-grid">
                            <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter rounded">
                                <h1 className="margin-bottom-2 text-center">1099 Form Info</h1>
                                <Form onSubmit={handleSubmit}>
                                    <Fieldset>
                                        <div className="grid-row grid-gap">

                                            <Label htmlFor="income">Income</Label>
                                            <TextInput id="income" name="income" type="text" required/>
                                            <Label htmlFor="deductions">Deductions</Label>
                                            <TextInput id="deductions" name="deductions" type="text" required/>

                                        </div>
                                    </Fieldset>
                                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                                        <ul className="usa-button-group">
                                            <li className="usa-button-group__item">
                                                <a href="/w2form" className="usa-button usa-button--outline">Back</a>
                                            </li>
                                            <li className="usa-button-group__item">
                                            <button type="submit" className="usa-button">Continue</button>
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
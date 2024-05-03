import { StepIndicator, StepIndicatorStep, Table } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'


export default function Review() {
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
                        status="complete"
                    />
                    <StepIndicatorStep
                        label="Review and submit"
                        status="current"
                    />
                </StepIndicator>
                <div style={{ width: '80%', maxWidth: '800px' }}>
                    <Table bordered fullWidth>
                        <caption className="usa-sr-only">Review Information</caption>
                        <tbody>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Name</th>
                                <td style={{ width: '70%' }}>{``}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Email</th>
                                <td style={{ width: '70%' }}>{``}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Date of Birth</th>
                                <td style={{ width: '70%' }}>{``}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>SSN</th>
                                <td style={{ width: '70%' }}>{``}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Address</th>
                                <td style={{ width: '70%' }}>{``}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Filing Status</th>
                                <td style={{ width: '70%' }}>{``}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>W2 Income</th>
                                <td style={{ width: '70%' }}>{``}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>W2 Withheld</th>
                                <td style={{ width: '70%' }}>{``}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>1099 Income</th>
                                <td style={{ width: '70%' }}>{``}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>1099 Deductions</th>
                                <td style={{ width: '70%' }}>{``}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>


                <div style={{ marginTop: '20px' }}>
                    <ul className="usa-button-group">
                        <li className="usa-button-group__item">
                            <a href="/form1099" className="usa-button usa-button--outline">Back</a>
                        </li>
                        <li className="usa-button-group__item">
                            <a href="/tax-return" className="usa-button">Submit</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
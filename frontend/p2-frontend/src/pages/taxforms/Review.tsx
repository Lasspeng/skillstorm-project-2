import { StepIndicator, StepIndicatorStep, Table } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { useEffect, useState } from 'react';


export default function Review() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        dateOfBirth: '',
        ssn: '',
        address: '',
        filingStatus: '',
        w2Income: '',
        w2Withheld: '',
        income1099: '',
        deductions1099: ''
    });
    
    useEffect(() => {
        //fetch will default to a GET request
        fetch('http://localhost:8080/users')
            .then(data => data.json())
            .then(returnedData => {
                setUserData({
                    name: returnedData.name,
                    email: returnedData.email,
                    dateOfBirth: returnedData.dateOfBirth,
                    ssn: returnedData.ssn,
                    address: returnedData.address,
                    filingStatus: returnedData.filingStatus,
                    w2Income: returnedData.w2Income,
                    w2Withheld: returnedData.w2Withheld,
                    income1099: returnedData.income1099,
                    deductions1099: returnedData.deductions1099
                });
            })
            .catch(error => console.error(error));
    }, []);
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
                    <Table fullWidth>
                        <caption className="usa-sr-only">Review Information</caption>
                        
                        <tbody>
                        <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Name</th>
                                <td style={{ width: '70%' }}>{userData.name}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Email</th>
                                <td style={{ width: '70%' }}>{userData.email}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Date of Birth</th>
                                <td style={{ width: '70%' }}>{userData.dateOfBirth}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>SSN</th>
                                <td style={{ width: '70%' }}>{userData.ssn}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Address</th>
                                <td style={{ width: '70%' }}>{userData.address}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Filing Status</th>
                                <td style={{ width: '70%' }}>{userData.filingStatus}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>W2 Income</th>
                                <td style={{ width: '70%' }}>{userData.w2Income}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>W2 Withheld</th>
                                <td style={{ width: '70%' }}>{userData.w2Withheld}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>1099 Income</th>
                                <td style={{ width: '70%' }}>{userData.income1099}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>1099 Deductions</th>
                                <td style={{ width: '70%' }}>{userData.deductions1099}</td>
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
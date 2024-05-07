import { StepIndicator, StepIndicatorStep, Table } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { useEffect, useState } from 'react';
import { User } from '../../Types';
import { useNavigate } from 'react-router-dom';

interface Props {
    user: User | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>,
    jwt: string
}

export default function Review({ user, setUser, jwt }: Props) {

    const navigate = useNavigate();

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

    console.log(user);

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
                                <td style={{ width: '70%' }}>{`${user?.firstName} ${user?.lastName}`}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Email</th>
                                <td style={{ width: '70%' }}>{user?.email}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Date of Birth</th>
                                <td style={{ width: '70%' }}>{user?.dateOfBirth}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>SSN</th>
                                <td style={{ width: '70%' }}>{user?.socialSecurity}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Address</th>
                                <td style={{ width: '70%' }}>{user?.streetAddress}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>Filing Status</th>
                                <td style={{ width: '70%' }}>{user?.filingStatus}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>W2 Income</th>
                                <td style={{ width: '70%' }}>{user?.formW2.wages}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>W2 Withheld</th>
                                <td style={{ width: '70%' }}>{user?.formW2.taxWithheld}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>1099 Income</th>
                                <td style={{ width: '70%' }}>{user?.form1099.wages}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>1099 Deductions</th>
                                <td style={{ width: '70%' }}>{user?.form1099.taxWriteOffs}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>


                <div style={{ marginTop: '20px' }}>
                    <ul className="usa-button-group">
                        <li className="usa-button-group__item">
                            <button onClick={() => navigate('/form1099')} className="usa-button usa-button--outline">Back</button>
                        </li>
                        <li className="usa-button-group__item">
                            <button onClick={() => navigate('/tax-return')} className="usa-button">Submit</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

import { StepIndicator, StepIndicatorStep, Table } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import { User } from '../../Types';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
    user: User | undefined; // User data
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>; // Function to set user state
    jwt: string; // JWT token
}

export default function Review({ user, setUser, jwt }: Props) {
    const { t } = useTranslation(); // Translations
    const navigate = useNavigate(); // Navigation function

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StepIndicator
                    counters="default"
                    headingLevel="h4"
                    ofText={t('ofText')} // Translate text
                    stepText={t('stepText')} 
                >
                    <StepIndicatorStep
                        label={t('personalInformation')} 
                        status="complete"
                    />
                    <StepIndicatorStep
                        label={t('filingStatus')} 
                        status="complete"
                    />
                    <StepIndicatorStep
                        label={t('w2Form')}
                        status="complete"
                    />
                    <StepIndicatorStep
                        label={t('form1099')} 
                        status="complete"
                    />
                    <StepIndicatorStep
                        label={t('reviewAndSubmit')} 
                        status="current"
                    />
                </StepIndicator>
                <div style={{ width: '80%', maxWidth: '800px' }}>
                    <Table fullWidth>
                    <caption className="usa-sr-only">{t('reviewInformation')}</caption>
                        <tbody>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>{t('name')}</th>
                                <td style={{ width: '70%' }}>{`${user?.firstName} ${user?.lastName}`}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>{t('email')}</th>
                                <td style={{ width: '70%' }}>{user?.email}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>{t('dateOfBirth')}</th>
                                <td style={{ width: '70%' }}>{user?.dateOfBirth}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>{t('socialSecurity')}</th>
                                <td style={{ width: '70%' }}>{user?.socialSecurity}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>{t('address')}</th>
                                <td style={{ width: '70%' }}>{user?.streetAddress}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>{t('filingStatus')}</th>
                                <td style={{ width: '70%' }}>{user?.filingStatus}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>{t('w2Income')}</th>
                                <td style={{ width: '70%' }}>{USDollar.format(user?.formW2.wages as number)}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>{t('w2Withheld')}</th>
                                <td style={{ width: '70%' }}>{USDollar.format(user?.formW2.taxWithheld as number)}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>{t('form1099Income')}</th>
                                <td style={{ width: '70%' }}>{USDollar.format(user?.form1099.wages as number)}</td>
                            </tr>
                            <tr>
                                <th scope="row" style={{ fontWeight: 'bold', width: '30%' }}>{t('form1099Deductions')}</th>
                                <td style={{ width: '70%' }}>{USDollar.format(user?.form1099.taxWriteOffs as number)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>


                <div style={{ marginTop: '20px' }}>
                    <ul className="usa-button-group">
                        <li className="usa-button-group__item">
                        <button onClick={() => navigate('/form1099')} className="usa-button usa-button--outline">{t('back')}</button>
                        </li>
                        <li className="usa-button-group__item">
                            <button onClick={() => navigate('/tax-return')} className="usa-button">{t('submit')}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

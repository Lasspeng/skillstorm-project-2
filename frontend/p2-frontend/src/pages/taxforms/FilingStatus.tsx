import { StepIndicator, StepIndicatorStep, Radio, Fieldset } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { useNavigate } from 'react-router-dom';
import { User } from '../../Types';
import { SetStateAction, useState } from 'react';
import { FilingStatusEnum } from '../../Types';
import { useTranslation } from 'react-i18next';

interface Props {
    user: User | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>,
    jwt: string
}

export default function FilingStatus({ user, setUser, jwt }: Props) {

    const [filingStatus, setFilingStatus] = useState('Single');
    const navigate = useNavigate();
    const { t } = useTranslation();


    const handleFilingStatusChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setFilingStatus(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        let fStatus = {
            filingStatus: ''
        };

        if (filingStatus === 'Single') {
            fStatus.filingStatus = FilingStatusEnum.SINGLE;
        } else {
            fStatus.filingStatus = FilingStatusEnum.MARRIED;
        }

        const updatedUser = Object.assign({}, user, fStatus);

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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '200px' }}>
            <StepIndicator
                    counters="default"
                    headingLevel="h4"
                    ofText={t('of')} // Translate text
                    stepText={t('step')} // Translate text
                >
                    <StepIndicatorStep
                        label={t('personalInfo')} // Translate text
                        status="complete"
                    />
                    <StepIndicatorStep
                        label={t('filingStatus')} // Translate text
                        status="current"
                    />
                    <StepIndicatorStep label={t('w2Form')} />
                    <StepIndicatorStep label={t('form1099')} /> 
                    <StepIndicatorStep label={t('reviewSubmit')} /> 
                </StepIndicator>
                <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter rounded">
                    <Fieldset legend={t('filingStatus')} legendStyle="large" >
                        <Radio id="single" name="filing-status" defaultChecked label={t('single')} value="Single" onChange={handleFilingStatusChange} />
                        <Radio id="jointly" name="filing-status" label={t('jointly')} value="Jointly" onChange={handleFilingStatusChange} />

                        <div style={{ marginTop: '20px' }}>
                            <ul className="usa-button-group">
                                <li className="usa-button-group__item">
                                    <button onClick={() => navigate('/taxprofile')} className="usa-button usa-button--outline">{t('back')}</button>
                                </li>
                                <li className="usa-button-group__item">
                                    <a href="/w2form" className="usa-button" onClick={handleSubmit} >{t('continue')}</a>
                                </li>
                            </ul>
                        </div>
                    </Fieldset>
                </div>

            </div>
        </>
    )
}

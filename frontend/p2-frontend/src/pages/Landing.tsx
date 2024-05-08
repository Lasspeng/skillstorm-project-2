import { Grid, GridContainer } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { User } from '../Types';
import { useEffect } from 'react';
import './styling/Landing.css';

import { useTranslation } from 'react-i18next';

interface Props {
    user: User | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>
    jwt: string
}

export default function Landing({ user, setUser, jwt }: Props) {
    const { t } = useTranslation();

    useEffect(() => {

        fetch('http://localhost:8080/users/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(userData => setUser(userData))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <>
            <main id="main-content">
                <section className="usa-hero">
                    <GridContainer>
                        <div className="usa-hero__callout">
                            <h1 className="usa-hero__heading">
                                <span className="usa-hero__heading--alt">{t('landing.welcome')}</span>
                            </h1>
                            <p>
                                {t('landing.description')}
                            </p>
                        </div>
                    </GridContainer>
                </section>

                <section className="grid-container usa-section">
                    <Grid row gap>
                        <Grid tablet={{ col: 4 }}>
                            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
                                {t('landing.calculateTaxes')}
                            </h2>
                        </Grid>
                        <Grid tablet={{ col: 8 }} className="usa-prose">
                            <p>
                                {t('landing.taxCalculation')}
                            </p>
                            <p>
                                {t('landing.hassleFree')}
                            </p>
                        </Grid>
                    </Grid>
                </section>
            </main>

        </>
    );
}

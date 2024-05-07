import { Grid, GridContainer } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import './Landing.css';
import { User } from '../Types';
import { useEffect } from 'react';

interface Props {
    user: User | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>
    jwt: string
}

export default function Landing({ user, setUser, jwt }: Props) {

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

    
    return (
        <>
            <main id="main-content">
                <section className="usa-hero">
                    <GridContainer>
                        <div className="usa-hero__callout">
                            <h1 className="usa-hero__heading">
                                <span className="usa-hero__heading--alt">Welcome to Tax Pro!</span>
                            </h1>
                            <p>
                                Tax Pro is your trusted tax return calculator service. We simplify tax filing for you.
                            </p>
                        </div>
                    </GridContainer>
                </section>

                <section className="grid-container usa-section">
                    <Grid row gap>
                        <Grid tablet={{ col: 4 }}>
                            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
                                Calculate Your Taxes Effortlessly
                            </h2>
                        </Grid>
                        <Grid tablet={{ col: 8 }} className="usa-prose">
                            <p>
                                Tax Pro makes tax calculation easy and convenient. Simply input your financial information,
                                and we'll handle the rest. Our intuitive interface ensures accurate results every time.
                            </p>
                            <p>
                                Whether you're an individual or a business owner, Tax Pro caters to all your tax filing needs.
                                Say goodbye to complex calculations and hello to hassle-free tax returns with Tax Pro.
                            </p>
                        </Grid>
                    </Grid>
                </section>
            </main>
        </>
    );
}

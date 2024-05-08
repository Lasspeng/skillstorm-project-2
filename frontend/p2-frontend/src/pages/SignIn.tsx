// Importing trussworks and react elements
import { Alert, Form, Fieldset, Grid, GridContainer, Label, TextInput, Button, Link} from '@trussworks/react-uswds';
import React from 'react';
import { useState } from 'react';
// Importing styling
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import './styling/SignIn.css';

import { useNavigate } from 'react-router-dom';
import { User } from '../Types';

import { useTranslation } from 'react-i18next';

interface Props {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>> // Function to set user state
  setJwt: React.Dispatch<React.SetStateAction<string>>; // Function to set JWT token state
}

export default function SignIn({ setUser, setJwt }: Props): React.ReactElement {
  const { t } = useTranslation(); // Translations

  const [showPassword, setShowPassword] = useState(false); // State for showing password
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const navigate = useNavigate(); // Navigation hook
  
  // Function to handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault(); // Preventing default form submission behavior

    const data = new FormData(event.target); // Getting form data
    const authInfo = {
      email : data.get("email"), // Extracting email
      password : data.get("password") // Extracting password
    };

    // Sending POST request to authenticate user
    fetch('http://localhost:8080/authenticate' , {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'} ,
      body: JSON.stringify(authInfo)  
    })
    .then(response => response.json()) // Parsing response data to JSON
    .then(jwtData => {
      setJwt(jwtData.jwt); // Setting JWT token
      setUser(() => {
        return {
          email: authInfo.email as string,
          password: authInfo.password as string
        } as User
      }
      ); // Setting user state
      navigate("/"); // Navigating to home page
    })
    .catch(() => {
      setErrorMessage('Incorrect email or password. Try again.'); // Setting error message
    });
  };


  return <>
    <main id="main-content">
      <div>
        <GridContainer className="usa-section">
          <Grid row={true} className="flex-justify-center">
            <Grid col={12} tablet={{
              col: 8
            }} desktop={{
              col: 6
            }} className="centered-grid">
              <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                <h1 className="margin-bottom-0">{t('signIn.title')}</h1>
                <Form onSubmit={handleSubmit}>
                  <Fieldset>
                    <Label htmlFor="email">{t('signIn.emailLabel')}</Label>
                    <TextInput id="email" name="email" type="email" autoCorrect="off" autoCapitalize="off" required={true} />

                    <Label htmlFor="password-sign-in">{t('signIn.passwordLabel')}</Label>
                    <TextInput id="password-sign-in" name="password" type={showPassword ? 'text' : 'password'} autoCorrect="off" autoCapitalize="off" required={true} />

                    <button title={showPassword ? t('signIn.hidePassword') : t('signIn.showPassword')} type="button" className="usa-show-password" aria-controls="password-sign-in" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
                      {showPassword ? t('signIn.hidePassword') : t('signIn.showPassword')}
                    </button>

                    {errorMessage && <Alert type="error" heading={t('signIn.errorHeading')} headingLevel="h4">{errorMessage}</Alert>}

                    <Button type="submit">{t('signIn.signInButton')}</Button>
                    <p className="text-center">
                      {t('signIn.noAccount')}
                      <Link href="/signup">{t('signIn.signUpLink')}</Link>
                      .
                    </p>

                  </Fieldset>
                </Form>
              </div>
            </Grid>
          </Grid>
        </GridContainer>
      </div>
    </main>
  </>;
}

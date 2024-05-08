// Importing trussworks and react elements
import { Form, Fieldset, Grid, GridContainer, Label, TextInput, Button, Link, Alert } from '@trussworks/react-uswds';
import React, { useState } from 'react';
// Importing styling
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import './styling/SignIn.css';

import { useNavigate } from 'react-router-dom';
import { User } from '../Types';

import { useTranslation } from 'react-i18next';


interface Props {
  user: User | undefined,
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

export default function SignUp(): React.ReactElement {
  const [showPassword, setShowPassword] = React.useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (event: any) => {

    event.preventDefault(); // Preventing default form submission behavior
    // Getting data from form
    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("password-confirm");

    // Checking if passwords match
    if (password !== confirmPassword) {
      setPasswordsMatch(false); // Update state to indicate passwords don't match
      return;
    }

    // Creating account object
    const account = {
      email: email,
      password: password
    };

    // Sending POST request to register user
    fetch('http://localhost:8080/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(account)
    })
      .then(data => data.json()) // Parsing response data to JSON
      .then((userData) => navigate("/signin")) // Navigating to sign-in page after successful registration
      .catch(() => alert("A user with these credentials already exists")); // Alerting if user already exists
  };

  return (
    <>
      <div className='centered-grid'>
        <main id="main-content">
          <div>
            <GridContainer className="usa-section">
              <Grid row className="margin-x-neg-205 flex-justify-center">
                <Grid col={12} mobileLg={{
                  col: 10
                }} tablet={{
                  col: 8
                }} desktop={{
                  col: 6
                }} className="padding-x-205 margin-bottom-4">

                  <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                    <h1 className="margin-bottom-0">{t('signUp.title')}</h1>
                    {/* Sign-up form */}
                    <Form onSubmit={handleSubmit}>
                      <Fieldset legend={t('signUp.getStartedLegend')}>
                        <p>
                          <abbr title="required" className="usa-hint usa-hint--required">
                            *
                          </abbr>{' '}
                          {t('signUp.requiredField')}
                        </p>

                        <Label htmlFor="email">
                          {t('signUp.emailLabel')}{' '}
                          <abbr title="required" className="usa-label--required">
                            *
                          </abbr>
                        </Label>
                        <TextInput id="email" name="email" type="email" autoCapitalize="off" autoCorrect="off" required={true} />

                        <Label htmlFor="password-create-account">
                          {t('signUp.createPasswordLabel')}{' '}
                          <abbr title="required" className="usa-label--required">
                            *
                          </abbr>
                        </Label>
                        <TextInput id="password-create-account" name="password" type={showPassword ? 'text' : 'password'} autoCapitalize="off" autoCorrect="off" required={true} />

                        <button title="Show password" type="button" className="usa-show-password" aria-controls="password-create-account password-create-account-confirm" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
                          {showPassword ? t('signUp.hidePassword') : t('signUp.showPassword')}
                        </button>

                        <Label htmlFor="password-create-account-confirm">
                          {t('signUp.retypePasswordLabel')}{' '}
                          <abbr title="required" className="usa-label--required">
                            *
                          </abbr>
                        </Label>
                        <TextInput id="password-create-account-confirm" name="password-confirm" type={showPassword ? 'text' : 'password'} autoCapitalize="off" autoCorrect="off" required={true} />
                        {/* Alert for passwords not matching */}
                        {!passwordsMatch && (
                          <Alert type="error" heading={t('signUp.errorHeading')} headingLevel="h4" slim role="alert">
                            {t('signUp.passwordsNotMatch')}
                          </Alert>
                        )}

                        <Button type="submit">Create account</Button>
                      </Fieldset>
                    </Form>
                  </div>

                  <p className="text-center">
                    {t('signUp.alreadyHaveAccount')}{' '}
                    <Link href="/signin">{t('signUp.signInLink')}</Link>.
                  </p>
                </Grid>

                <Grid col={12} mobileLg={{
                  col: 10
                }} tablet={{
                  col: 8
                }} desktop={{
                  col: 6
                }} className="padding-x-205">
                  <div className="border-top border-base-lighter padding-top-4 desktop:border-0 desktop:padding-top-0">
                    <h2 className="display-none desktop:display-block">
                      {t('signUp.simplifyTaxEstimation')}
                    </h2>

                    <div className="usa-prose">
                      <p>
                        {t('signUp.welcomeText')}
                      </p>
                    </div>

                    <div className="border-top border-base-lighter margin-top-3 padding-top-1">
                    </div>
                  </div>
                </Grid>
              </Grid>
            </GridContainer>
          </div>
        </main>
      </div>

    </>
  );
}

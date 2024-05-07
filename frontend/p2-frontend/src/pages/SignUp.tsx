import { Form, Fieldset, Grid, GridContainer, Label, TextInput, Button, Link, Alert } from '@trussworks/react-uswds';
import React, { useState } from 'react';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import './styling/SignIn.css';
import { useNavigate } from 'react-router-dom';
import { User } from '../Types';


interface Props {
  user: User | undefined,
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

export default function SignUp(): React.ReactElement {
  const [showPassword, setShowPassword] = React.useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();


  const handleSubmit = (event: any) => {
    
      event.preventDefault();
      const data = new FormData(event.target);
      const email = data.get("email");
      const password = data.get("password");
      const confirmPassword = data.get("password-confirm");

      if (password !== confirmPassword) {
        setPasswordsMatch(false); // Update state to indicate passwords don't match
        return;
      }
      const account = {
        email: email,
        password: password
      };

      fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(account)
      })
      .then(data => data.json())
      .then((userData) => navigate("/signin"))
      .catch(() => alert("A user with these credentials already exists"))
    };
  return (
    <>
      <div className='centered-grid'>
        <main id="main-content">
          <div className="bg-base-lightest">
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
                    <h1 className="margin-bottom-0">Create account</h1>
                    <Form onSubmit={handleSubmit}>
                      <Fieldset legend="Get started with an account.">
                        <p>
                          <abbr title="required" className="usa-hint usa-hint--required">
                            *
                          </abbr>{' '}
                          indicates a required field.
                        </p>

                        <Label htmlFor="email">
                          Email address{' '}
                          <abbr title="required" className="usa-label--required">
                            *
                          </abbr>
                        </Label>
                        <TextInput id="email" name="email" type="email" autoCapitalize="off" autoCorrect="off" required={true} />

                        <Label htmlFor="password-create-account">
                          Create password{' '}
                          <abbr title="required" className="usa-label--required">
                            *
                          </abbr>
                        </Label>
                        <TextInput id="password-create-account" name="password" type={showPassword ? 'text' : 'password'} autoCapitalize="off" autoCorrect="off" required={true} />

                        <button title="Show password" type="button" className="usa-show-password" aria-controls="password-create-account password-create-account-confirm" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
                          {showPassword ? 'Hide password' : 'Show password'}
                        </button>

                        <Label htmlFor="password-create-account-confirm">
                          Re-type password{' '}
                          <abbr title="required" className="usa-label--required">
                            *
                          </abbr>
                        </Label>
                        <TextInput id="password-create-account-confirm" name="password-confirm" type={showPassword ? 'text' : 'password'} autoCapitalize="off" autoCorrect="off" required={true} />

                        {!passwordsMatch && (
                          <Alert type="error" heading="Error status" headingLevel="h4" slim role="alert">
                            Passwords do not match.
                          </Alert>
                        )}

                        <Button type="submit">Create account</Button>
                      </Fieldset>
                    </Form>
                  </div>

                  <p className="text-center">
                    Already have an account?{' '}
                    <Link href="/signin">Sign in</Link>.
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
                      A tagline that explains the benefit of creating an account.
                    </h2>

                    <div className="usa-prose">
                      <p>
                        Welcome to our Federal Tax Calculator! Easily estimate your taxes by creating an account. Simply provide your email and create a password, and you're ready to go. Already have an account? Sign in now. Let us help you navigate your tax obligations effortlessly. Get started today
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

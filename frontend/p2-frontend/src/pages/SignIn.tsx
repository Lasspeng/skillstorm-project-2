import { Form, Fieldset, Grid, GridContainer, Label, TextInput, Button, Link} from '@trussworks/react-uswds';
import React from 'react';
import { useState } from 'react';
import { toast } from "react-toastify";
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import './SignIn.css';


export default function SignIn(): React.ReactElement {
  const [showPassword, setShowPassword] = useState(false);
  const [jwtToken, setJwtToken] = useState('');
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const authInfo = {
      email : data.get("email"),
      password : data.get("password")
    };
    fetch('http://localhost:8080/authenticate' , {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'} ,
      body: JSON.stringify(authInfo)  
    })
    .then(data => data.json())
    .then(sign => setJwtToken(sign.jwt))
    .catch(error => {
      toast("Incorrect username or password")
    })
  };
  return <>
    <main id="main-content">
      <div className="bg-base-lightest">
        <GridContainer className="usa-section">
          <Grid row={true} className="flex-justify-center">
            <Grid col={12} tablet={{
              col: 8
            }} desktop={{
              col: 6
            }} className="centered-grid">
              <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                <h1 className="margin-bottom-0">Sign in</h1>
                <Form onSubmit={handleSubmit}>
                  <Fieldset>
                    <Label htmlFor="email">Email address</Label>
                    <TextInput id="email" name="email" type="email" autoCorrect="off" autoCapitalize="off" required={true} />

                    <Label htmlFor="password-sign-in">Password</Label>
                    <TextInput id="password-sign-in" name="password" type={showPassword ? 'text' : 'password'} autoCorrect="off" autoCapitalize="off" required={true} />

                    <button title="Show password" type="button" className="usa-show-password" aria-controls="password-sign-in" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
                      {showPassword ? 'Hide password' : 'Show password'}
                    </button>

                    <Button type="submit">Sign in</Button>
                    <p className="text-center">
                      {"Don't have an account? "}
                      <Link href="javascript:void();">Create your account now</Link>
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
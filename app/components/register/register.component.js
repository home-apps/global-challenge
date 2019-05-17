import React from 'react';
import {
  Button, Form, Segment, Image
} from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import Fitbit from './images/fitbitLogo.svg';

const RegistrationForm = () => (
  <div className="login-form">
    <Form size="large" action="https://www.fitbit.com/oauth2/authorize?">
      <Segment stacked>
        <input type="hidden" name="response_type" value="code" />
        <input type="hidden" name="client_id" value="228MZ3" />
        <input type="hidden" name="redirect_uri" value="https://localhost:3000/fitbit/auth" />
        {/* <input type="hidden" name="redirect_uri" value="https://capcoglobalchallenge.com/fitbit/auth" /> */}
        <input type="hidden" name="scope" value="activity location" />

        <Form.Input fluid icon="user" iconPosition="left" placeholder="Capco ID" name="state" id="capco" required />
        <Button color="teal" fluid size="large">
          <Image avatar src={Fitbit} verticalAlign="middle" />
          <FormattedMessage id="register.label" />
        </Button>
      </Segment>
    </Form>
  </div>
);

export default RegistrationForm;

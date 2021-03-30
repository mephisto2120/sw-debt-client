import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';

class Signup extends Component {
  onSubmit = (formProps: any) => {
    console.log(formProps);
  };

  render() {
    // @ts-ignore
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <button>Sign Up!</button>
      </form>
    );
  }
}

// @ts-ignore
export default reduxForm({ form: 'signup' })(Signup);

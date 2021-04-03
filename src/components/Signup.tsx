import React, {Component, useCallback} from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { useForm } from 'react-hook-form';

interface SignUpProps {
  email: string,
  password: string,
  errorMessage: string
}

interface SignUpState {
  email: string,
  password: string,
  errorMessage: string,
}

class Signup extends Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    const initialState = {
      email: '',
      password: '',
      errorMessage: ''
    }
    this.state = initialState;
    // this.handleChange = this.handleChange.bind(this);
  }

  onSubmit = (formProps: SignUpProps) => {
    // this.props.signup(formProps);
    this.setState({email: formProps.email, password: formProps.password})
    console.log(formProps);
  };

  render() {

    // const { register, handleSubmit } = useForm<SignUpProps>();

    //TODO: FIX
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
            // ref={register}
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
            // ref={register}
          />
        </fieldset>
        <button>Sign Up!</button>
      </form>
    );
  }
}

// @ts-ignore
export default reduxForm({ form: 'signup' })(Signup);

// export default compose(
//   connect(null, actions),
//   reduxForm({ form: 'signup' })
// )(Signup);

'use client';

import { useActionState } from 'react';
import { SubmitButton } from '@/components/custom/SubmitButton';
import { FormElement } from '@/components/custom/FormElement';
import {
  RegisterState,
  registerUser,
} from './data/actions/registerUser-actions';
import { RegisterErrors } from '@/components/custom/RegisterErrors';

const INITIAL_STATE: RegisterState = {
  name: 'hoge',
  email: 'hoge@email.com',
  zodErrors: null,
  registerErrors: null,
  message: null,
};

export default function Home() {
  const [state, formAction, pending] = useActionState(
    registerUser,
    INITIAL_STATE
  );
  return (
    <div className="max-w-screen-md mx-auto mt-10 grid gap-10 font-bold text-large text-center">
      <h1>Form Sample With 'useActionState'</h1>
      <form className="grid gap-8" action={formAction}>
        <FormElement
          item="name"
          data={state.name}
          errors={state.zodErrors && state.zodErrors.name}
        />
        <FormElement
          item="email"
          data={state.email}
          errors={state.zodErrors && state.zodErrors.email}
        />
        <div>
          <SubmitButton
            text="プロフィールを登録する"
            loadingText="登録中..."
            className="bg-blue-500 text-white rounded-md mt-8"
            pending={pending}
          />
        </div>
        <RegisterErrors registerErrors={state.message} />
      </form>
    </div>
  );
}

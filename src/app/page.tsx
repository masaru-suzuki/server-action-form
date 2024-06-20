'use client';

import { useActionState } from 'react';
import { SubmitButton } from '@/components/custom/SubmitButton';
import { FormElement } from '@/components/custom/FormElement';
import {
  ProfileFormProps,
  registerUser,
} from './data/actions/registerUser-actions';

const INITIAL_STATE: ProfileFormProps = {
  name: 'hoge',
  email: 'hoge@email.com',
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
        <FormElement item="name" data={state.name} />
        <FormElement item="email" data={state.email} />
        <div>
          <SubmitButton
            text="プロフィールを登録する"
            loadingText="登録中..."
            className="bg-blue-500 text-white rounded-md mt-8"
            pending={pending}
          />
        </div>
      </form>
    </div>
  );
}

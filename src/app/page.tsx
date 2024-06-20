'use client';

import { useActionState } from 'react';
import { increment } from './data/actions/contact-actions';

export default function Home() {
  const [state, formAction, pending] = useActionState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>
        {pending ? '...pending' : 'increment'}
      </button>
    </form>
  );
}

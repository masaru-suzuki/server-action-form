'use server';

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export interface ProfileFormProps {
  name: string;
  email: string;
}

export async function registerUser(
  prevState: ProfileFormProps,
  formData: FormData
) {
  console.log(prevState);
  console.log(formData);

  // 本来であればここでAPIを叩いてユーザー登録処理を行う
  await sleep(2000);
  return prevState;
}

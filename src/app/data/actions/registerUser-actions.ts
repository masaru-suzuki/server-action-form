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
  const rawFormData = Object.fromEntries(formData);

  // payloadが受け取ったデータ
  const payload = {
    name: rawFormData.name,
    email: rawFormData.email,
  };

  console.log(prevState);
  console.log(payload);

  // 本来であればここでAPIを叩いてユーザー登録処理を行う
  await sleep(2000);
  return prevState;
}

'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

// ダミーのAPI
const registerDB = async (data: ProfileFormProps) => {
  try {
    await sleep(2000);
    return { data: data, error: null };
  } catch (error) {
    console.error('Registration Service Error:', error);
    return { data: null, error: error as RegisterErrors };
  }
};

export interface ProfileFormProps {
  name: string;
  email: string;
}

export type RegisterErrors = string[] | null;
export type ZodErrors = {
  name?: string[];
  email?: string[];
} | null;
export type Message = string | null;

export type RegisterState = ProfileFormProps & {
  zodErrors: ZodErrors;
  registerErrors: RegisterErrors;
  message: Message;
};

// zodのスキーマ定義
const schemaRegister = z.object({
  name: z
    .string()
    .min(3, {
      message: 'ユーザー名は3文字以上で入力してください',
    })
    .max(20, {
      message: 'ユーザー名は3文字以上20文字以下で入力してください',
    }),
  email: z.string().email({
    message: '有効なEメールアドレスを入力してください',
  }),
});

export async function registerUser(
  prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  const validatedFields = schemaRegister.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  const rawFormData = Object.fromEntries(formData);

  // 型ガード
  const payload = {
    name: typeof rawFormData.name === 'string' ? rawFormData.name : '',
    email: typeof rawFormData.email === 'string' ? rawFormData.email : '',
  };

  // zodのバリデーション
  if (!validatedFields.success) {
    console.log({
      ...payload,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      registerErrors: null,
      message: '入力エラーがあります。修正してください。',
    });

    return {
      ...payload,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      registerErrors: null,
      message: '入力エラーがあります。修正してください。',
    };
  }

  // 本来であればここでAPIを叩いてユーザー登録処理を行う
  // 今回はダミーのAPIを呼び出す
  const responseData = await registerDB(validatedFields.data);
  const validatedData = validatedFields.data;

  // レスポンスがない場合のエラー処理
  if (!responseData) {
    return {
      ...validatedData,
      zodErrors: null,
      registerErrors: null,
      message: 'レスポンスがありません。',
    };
  }

  // データ登録エラーが発生した場合のエラー処理
  if (responseData.error) {
    return {
      ...validatedData,
      zodErrors: null,
      registerErrors: responseData.error,
      message: 'データ登録エラーが発生しました。',
    };
  }

  // データ登録成功時の処理
  // MEMO: 通常であれば、完了ページにリダイレクトするなどの処理を行う
  redirect('/completed');
}

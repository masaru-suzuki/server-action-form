'use server';

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function registerUser(prevState: any, formData: any) {
  console.log(prevState);
  console.log(formData);
  await sleep(2000);
  return prevState;
}

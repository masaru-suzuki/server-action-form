'use server';

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function increment(prevState: any, queryData: any) {
  await sleep(2000);
  return prevState + 1;
}

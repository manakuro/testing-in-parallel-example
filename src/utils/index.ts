export const sum = (n1: number, n2: number) => n1 + n2

export const sleep = (time: number, cb: Function) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb()
      resolve(null)
    }, time);
  });
}
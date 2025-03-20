/**
 * Util function to simulate API latency
 * @returns
 */
export const asyncTimeout = () => {
  return new Promise((resolve) => setTimeout(resolve, 200));
};

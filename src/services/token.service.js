export const getToken = (tokenName) => {
  return localStorage.getItem(tokenName);
};

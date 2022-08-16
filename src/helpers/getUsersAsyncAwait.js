

export const getUsersAsyncAwait = async () => {
  const resp     = await fetch('https://reqres.in/api/users?page=1');
  const { data } = await resp.json()
  return data
}
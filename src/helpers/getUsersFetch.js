

export const getUsersFetch = () => {
  return fetch('https://reqres.in/api/users?page=1')
    .then( resultado => resultado.json()
    .then( ({ data }) => data))
}
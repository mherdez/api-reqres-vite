
export const getUsersPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve(fetch('https://reqres.in/api/users?page=1'));
    }, 3000)
  });
};


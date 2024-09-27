export interface UserDetails {
  email: string;
}

export const getUserDetails = async (token: string): Promise<UserDetails> => {
  const response = await fetch("http://localhost:4000/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  alert(response);
  if (!response.ok) {
    console.log("fetch to get email");
  }

  return response.json();
};

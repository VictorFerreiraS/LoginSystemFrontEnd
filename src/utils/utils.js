import jwt_decode from 'jwt-decode';

export function getUserInfoFromToken() {
  const storedToken = localStorage.getItem("token");

  if (storedToken) {
    // Decode the token and extract firstName and lastName
    try {
      const decodedToken = jwt_decode(storedToken);
      if (decodedToken) {
        return {
          firstName: `${decodedToken.firstName}`,
          lastName: `${decodedToken.lastName}`,
        };
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }
  
  return null; // Return null if token is not present or decoding fails
}

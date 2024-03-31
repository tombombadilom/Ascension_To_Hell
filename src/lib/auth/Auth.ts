// lib/auth/Auth.tsx
class Auth {
  // Méthode static utilisée pour stocker un élément dans le localStorage
  private static setItem(key: string, value: string | boolean): void {
    if (typeof value === 'boolean') {
      // Si la valeur est de type boolean, convertissez-la en chaîne de caractères
      value = value.toString();
    }
    // Stockez la valeur sous forme de chaîne de caractères
    localStorage.setItem(key, value);
  }

  // Méthode static utilisée pour authentifier un utilisateur et stocker ses données
  static authenticateUser(data: AuthenticateUserData): boolean {
    // Stockez le token JWT
    this.setItem('token', data.jwt);

    // Stockez l'email de l'utilisateur
    this.setItem('email', data.user.email);

    // Stockez le nom d'utilisateur
    this.setItem('name', data.user.username);

    // Stockez l'id d'utilisateur (converti en chaîne de caractères)
    this.setItem('uid', data.user.id.toString());

    // Stockez l'état de connexion de l'utilisateur
    this.setItem('userIsLoggedIn', true);

    return true;
  }
  /**
   * Retourne vrai si l'utilisateur est connecté, faux sinon.
   * @returns {boolean} True si l'utilisateur est connecté, false sinon.
   */
  static isUserAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
// Définition de l'interface pour les données d'authentification de l'utilisateur
interface AuthenticateUserData {
  jwt: string;
  user: {
    email: string;
    username: string;
    id: number;
  };
}
export default Auth;

// Exemple d'utilisation :
// const userData: AuthenticateUserData = {
//   jwt: 'your.jwt.token.here',
//   user: {
//     email: 'user@example.com',
//     username: 'johndoe',
//     id: 123456
//   },
// };

// // Appel de la méthode pour authentifier l'utilisateur
// Auth.authenticateUser(userData);

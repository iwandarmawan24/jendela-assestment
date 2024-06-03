export function isLoggedIn(): boolean {
    const token = localStorage.getItem('token'); // Adjust the key according to your app's logic
    return !!token;
  }
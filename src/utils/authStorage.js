import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getToken() {
    // Get the access token for the storage
    const token = await AsyncStorage.getItem(`${this.namespace}:accessToken`);
    return token ? JSON.parse(token) : undefined;
  }

  async storeToken(accessToken) {
    // Add the access token to the storage
    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(accessToken)
    );
  }

  async clearToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;

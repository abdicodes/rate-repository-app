import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
import createApolloClient from './src/utils/apolloClient';
import { ApolloProvider } from '@apollo/client';
import AuthStorage from './src/utils/authStorage';
import { AuthProvider } from './src/hooks/useAuthStorage';

const authStorage = new AuthStorage();

const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthProvider>
            <Main />
          </AuthProvider>
        </ApolloProvider>
      </NativeRouter>

      <StatusBar style="auto" />
    </>
  );
};

export default App;

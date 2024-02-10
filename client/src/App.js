import Header from "./components/Header"
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:7000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div>
          Hello World!
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;

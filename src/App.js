   import {Route,Switch ,Redirect} from 'react-router-dom';
   import AllQuote from './pages/AllQuotes';
   import NewQuote from './pages/NewQuote';
   import QuoteDetails from './pages/QuoteDetails';
   import Layout from './components/layout/Layout';

   function App() {
      return (
        <Layout>
        <Switch>
          <Route path ='/' >
            <Redirect to ='/quotes'/>
          </Route>
          <Route path='/quotes' exact>
          <AllQuote/>
          </Route>

          <Route path = '/quotes/:quoteId'>
            <QuoteDetails/>

          </Route>

          <Route path=' /new-quote'>
            <NewQuote/>

          </Route>

        </Switch>
        </Layout>
      );
    }

    export default App;

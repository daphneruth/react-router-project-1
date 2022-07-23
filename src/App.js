   import React, { Suspense } from 'react';
   import {Route,Switch ,Redirect} from 'react-router-dom';
   import AllQuote from './pages/AllQuotes';
   import QuoteDetails from './pages/QuoteDetails';
   import Layout from './components/layout/Layout';
   import LoadingSpinner from './components/UI/LoadingSpinner'

  const NewQuote = React.lazy(()=> import('/pages/Newquote'));

   function App() {
      return (
        <Layout>
          <Suspense
          fallback='centered'>
            <LoadingSpinner/>
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
        </Suspense>
        </Layout>
      );
    }

    export default App;

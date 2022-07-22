   import {Route, Switch} from 'react-router-dom';
   import AllQuote from './pages/AllQuotes';
   import NewQuote from './pages/NewQuote';
   import QuoteDetails from './pages/QuoteDetails';
   function App() {
      return (
        <Switch>
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
      );
    }

    export default App;

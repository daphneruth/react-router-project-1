    
    import { Fragment } from "react";
    import { useParams } from "react-router-dom";
    import Comments from '../components/comments/Comments';
    import { Route } from "react-router-dom";
    import HighlightedQuote from '../components/quotes/HighlightedQuote'

    const DUMMY_QUOTES = [
        {
            id:'q1',
            author:'ME',
            text:'react is fun'
        },
        {
            id:'q1',
            author:'you',
            text:'react is great'
        },
    ]
    const QuoteDetails = ()=>{
        const params = useParams();

        

       return <Fragment>
       < h1>Quote details</h1>
       <p>{params.quoteId}</p>
       <Route path ='quotes/:quoteId/Comments'>
        
       </Route>
       </Fragment>
    }
    export default QuoteDetails;
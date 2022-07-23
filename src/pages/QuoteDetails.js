    
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

        const quote = DUMMY_QUOTES.find((quote)=>quoteId===params.quoteId)

        if (!quote){
            return <p>No found Quote</p>
        }

       return <Fragment>
       
       <HighlightedQuote text={quote.text} author={quote.author}/>
       <Route path ='quotes/:quoteId/Comments'>
        <Comments/>
       </Route>
       </Fragment>
    }
    export default QuoteDetails;
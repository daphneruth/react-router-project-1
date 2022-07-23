    
    import { Fragment } from "react";
    import { useParams } from "react-router-dom";
    import Comments from '../components/comments/Comments';
    impo
    const QuoteDetails = ()=>{
        const params = useParams();

       return <Fragment>
       < h1>Quote details</h1>
       <p>{params.quoteId}</p>
       <Route path ={`/quotes/${params.quoteId}/comments`}>
        
       </Route>
       </Fragment>
    }
    export default QuoteDetails;
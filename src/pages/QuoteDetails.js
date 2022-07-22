    import { Fragment } from "react";
    import { Fragment } from "react";
    import { useParams } from "react-router-dom";
    const QuoteDetails = ()=>{
        const params = useParams();

       return <Fragment>
       < h1>Quote details</h1>
       <p>{params.quoteId}</p>
       </Fragment>
    }
    export default QuoteDetails;
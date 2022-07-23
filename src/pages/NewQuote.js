    import QuoteForm from '../components/quotes/QuoteForm';
    const NewQuote = ()=>{
        const addQuoteHandler = quoteData =>
        {console.log(quoteData)}
        <h1>New quote page</h1>
        return
        <QuoteForm onAddQuote={addQuoteHandler}/>
    }

    export default NewQuote;
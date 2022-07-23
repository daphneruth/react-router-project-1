import QuoteList from '../components/quotes/QuoteList';
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
const AllQuote = ()=>{
    return(
    <QuoteList quotes= {DUMMY_QUOTES}/>
    )
}
export default AllQuote;
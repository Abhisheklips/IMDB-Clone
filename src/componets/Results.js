import React from 'react'
import Card from './Card'

const Results = ({results}) => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-5xl mx-auto py-4'>
      {results &&  results.map(result =>(
        // <div key={result.id}> 
        //     {result.original_title}
        //     </div>
        <Card  key={result.id} result={result}/>
      ))}
    </div>
  )
}

export default Results

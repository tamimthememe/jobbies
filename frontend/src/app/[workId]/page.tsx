import React from 'react'

const page = ({params}: {params: {workId: string}} ) => {
  return (
    <div>{params.workId}</div>
  )
}

export default page
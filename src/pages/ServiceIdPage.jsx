import React from 'react'
import { useSelector } from 'react-redux'

function ServiceIdPage() {
    const type = useSelector((state) => state.program.routeType)
    console.log(type)
  return (
    <div>ServiceIdPage</div>
  )
}

export default ServiceIdPage
import React from 'react'
import { Link } from 'wouter'

const ImperativeOrange = (props: { hostname: string; requestIP: string }) => {
  return (
    <>
      <h1>Imperative Orange</h1>
      <p>
        This page was rendered imperatively on {props.hostname} for {props.requestIP}
      </p>
      <br />
      <Link href="~/">Home</Link>
    </>
  )
}

export default ImperativeOrange

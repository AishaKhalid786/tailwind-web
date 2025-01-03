import Link from 'next/link'
import React from 'react'

const ServicePage = () => {
  return (
    <div>

      <h1>This is our service provider page.</h1>
      <p>Following services we can provide for your memorable art.</p>

      <ol>

        <li><Link href="/services/handmade-jewelery">This is our Creative Handmade Jewelery page.</Link></li>
        <ul>
       <li><Link href="/">Go to Home Page</Link></li>
       <li><Link href="/contact">Go to Contact Page</Link></li>
       <li><Link href="/services">Go to About Page</Link></li>

     </ul>

      </ol>
    </div>
  )
}

export default ServicePage

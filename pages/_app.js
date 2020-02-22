import App from 'next/app'
import React, { Fragment } from 'react'

import Meta from '../src/components/layout/meta'
import Header from '../src/components/layout/header'

import '../src/styles/_base.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Fragment>
        <Meta />
        <Header />
        <Component {...pageProps} />
      </Fragment>
    )
  }
}

export default MyApp

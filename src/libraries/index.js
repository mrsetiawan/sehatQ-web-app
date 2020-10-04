import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import axios from 'axios'
import Slider from 'react-slick'
import { Helmet } from 'react-helmet'
import FacebookLogin from 'react-facebook-login'
import { useGoogleLogin } from 'react-google-login'
import Skeleton from 'react-loading-skeleton'
import loadable from '@loadable/component'

export {
  React,
  ReactDOM,
  Provider,
  connect,
  createStore,
  compose,
  axios,
  reduxThunk,
  Slider,
  loadable,
  Helmet,
  FacebookLogin,
  Skeleton,
  useGoogleLogin
}

export * from 'react'
export * from 'react-dom'
export * from 'react-router-dom'
export * from 'redux'
export * from 'react-redux'
export * from 'redux-thunk'
export * from 'react-slick'
export * from 'axios'
export * from '@loadable/component'
export * from 'react-helmet'
export * from 'react-bootstrap'
export * from 'react-facebook-login'
export * from 'react-google-login'
export * from '@fortawesome/free-solid-svg-icons'
export * from '@fortawesome/free-brands-svg-icons'
export * from '@fortawesome/react-fontawesome'
export * from 'react-loading-skeleton'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import axios from 'axios'
import Slider from 'react-slick'
import Loadable from 'react-loadable'
import { Helmet } from 'react-helmet'
import FacebookLogin from 'react-facebook-login'

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
  Loadable,
  Helmet,
  FacebookLogin
}

export * from 'react'
export * from 'react-dom'
export * from 'react-router-dom'
export * from 'redux'
export * from 'react-redux'
export * from 'redux-thunk'
export * from 'react-slick'
export * from 'axios'
export * from 'react-loadable'
export * from 'react-helmet'
export * from 'react-bootstrap'
export * from 'react-facebook-login'
export * from '@fortawesome/free-solid-svg-icons'
export * from '@fortawesome/react-fontawesome'
import { createSelector } from 'reselect'
import { initialState } from './reducer'

export const selectProductsDomain = state => state.productsList || initialState

export const getProducts = () => createSelector(selectProductsDomain, state => state.products)
export const getProductsLoading = () => createSelector(selectProductsDomain, state => state.loading)
export const getProductsError = () => createSelector(selectProductsDomain, state => state.error)

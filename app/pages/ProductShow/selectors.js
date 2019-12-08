import { createSelector } from 'reselect'
import { initialState } from './reducer'

export const selectProductsDomain = state => state.productShow || initialState

export const getProduct = () => createSelector(selectProductsDomain, state => state.product)
export const getProductLoading = () => createSelector(selectProductsDomain, state => state.loading)
export const getProductError = () => createSelector(selectProductsDomain, state => state.error)

export const getProductDeleted = () => createSelector(selectProductsDomain, state => state.deleted)

import {
  combineReducers,
  configureStore,
  PreloadedState
} from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'

// export const store = configureStore({
//   reducer: {
//     carrinho: carrinhoReducer,
//     [api.reducerPath]: api.reducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware)
// })

//A ESTRUTURA ACIMA FOI ALTERADA PARA CRIAR A FUNÇÃO ABAIXO E USAR NO TESTE
//O COMBINEREDUCERS JUNTA VÁRIOS EM UM SÓ (CARRINHO E API REDUCER)
const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

//ESSA FUNÇÃO CRIA A STORE DO REDUX USANDO OS REDUCERS COMBINADOS
//MIDDLEWARE USA OS PADRÕES DE MIDDLEWARE
//PRELOADEDSTATE: PERMIETE INICIAR A STORE COM UM ESTADO INICIAL
export function configuraStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

//ROOTSTATE: TIPO DO ESTADO GLOBAL
//APPSTORE: TIPO DA STORE CONFIGURADA PARA USAR EM USESELECTOR E USEDISPATCH
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configuraStore>

// export type RootReducer = ReturnType<typeof store.getState>

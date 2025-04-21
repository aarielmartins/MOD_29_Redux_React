import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from '../../App'

//TIPAGEM DO ESTADO EM ITENS DE OBJETO GAME
type CarrinhoState = {
  itens: Game[]
}

//TIPAGEM DO ESTADO INICIAL EM UM ARRAY VAZIO PARA RECEBER OS GAMES
const initialState: CarrinhoState = {
  itens: []
}

//FATIA DO REDUX
const carrinhoSlice = createSlice({
  //NOME
  name: 'carrinho',
  //ESTADO INCIAL
  initialState,
  //REDUCERS DO CARRINHOSLICE
  reducers: {
    //FUNÇÃO ADICIONAR QUE PEGA O ESTADO VAZIO E ADICIONA UMA ACTION QUE RECEBE UM GAME
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      //SE O JOGO JA TIVER NO ARRAY DE ESTADO DA O ALERTA
      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
        //SE NÃO TIVER DA UM PUSH (QUE SÓ É POSSÍVEL POR CAUSA DO
        //WRITABLEDRAFT )
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer

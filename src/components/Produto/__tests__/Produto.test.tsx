import { fireEvent, screen } from '@testing-library/react'
import { renderizaComProvider } from '../../../utils/tests'
import Produto from '..'

const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows', 'PS5', 'XBOX Series S/X'],
  preco: 199.9,
  precoAntigo: 299.9,
  titulo: 'Hogwarts Legacy'
}

//TESTA A RENDERIZAÇÃO
describe('Testes para o componente produto', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  })

  //TESTA SE FOI ADICIONADO ALGUM PRODUTO NO CARRINHO COM O BOTAO
  test('Deve adicionar um item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adicionar-produto')
    //CLICA NO BOTAO
    fireEvent.click(botao)
    //PEGA O ESTADO ATUAL DO REDUX CARRINHO E CONFERE SE TEM 1 ITEM
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})

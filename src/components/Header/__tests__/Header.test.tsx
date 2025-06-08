import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente header', () => {
  test('Deve renderizar corretamente', () => {
    //FUNÇÃO PARA RENDERIZAR JÁ COM O PROVIDER O ELEMENTO FILHO
    renderizaComProvider(<Header />)
    //ESPERA QUE RENDERIZE O TEXTO "EBAC GAMES"
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    //RENDERIZA O FILHO COM PROVIDER
    renderizaComProvider(<Header />, {
      //INSERE 2 ITENS NO PREELOADEDSTATE DO REDUX CARRINHO
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows', 'PS5', 'XBOX Series S/X'],
              preco: 199.9,
              precoAntigo: 299.9,
              titulo: 'Hogwarts Legacy'
            }
          ]
        }
      }
    })

    //ESPERA RENDERIZAR "2 ITENS" NO SPAN NOMEADO "QTD-CARRINHO"
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})

import { render, screen } from '@testing-library/react'
import Home from '../../../pages/home/index.page'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', {
      name: /hello/,
    })
 
    expect(heading).toBeInTheDocument()
  })
})
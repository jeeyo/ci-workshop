import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/vue'

import WithoutStore from '../pages/WithoutStore.vue'

describe('WithoutStore component', () => {

  it('should disable decrement Button if count is already zero', async () => {

    const { getByText } = render(WithoutStore)

    const decrement_button = getByText('Decrease by 1')

    expect(decrement_button).toBeDisabled()
  })

  it('should set count state to 1 if clicked increment button once', async () => {

    const { getByText, getByTestId } = render(WithoutStore)

    const increment_button = getByText('Increase by 1')
    await fireEvent(increment_button, new MouseEvent('click'))

    const count_result = getByTestId('count-result')

    expect(count_result).toHaveTextContent('count is 1')
  })

  it('should set count state to 0 if clicked increment button once and then clicked decrement button once', async () => {

    const { getByText, getByTestId } = render(WithoutStore)

    const increment_button = getByText('Increase by 1')
    await fireEvent(increment_button, new MouseEvent('click'))

    const decrement_button = getByText('Decrease by 1')
    await fireEvent(decrement_button, new MouseEvent('click'))

    const count_result = getByTestId('count-result')

    expect(count_result).toHaveTextContent('count is 0')
  })
})

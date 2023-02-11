import '@testing-library/jest-dom'
import { render, fireEvent, waitFor } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import WithoutStoreAdvanced from '../pages/WithoutStoreAdvanced.vue'

describe('WithoutStoreAdvanced component', () => {
  
  it('should disable decrement Button if count is already zero', async () => {

    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ counter: 0 }),
      })
    )

    const { getByText } = render(WithoutStoreAdvanced)
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))

    const decrement_button = getByText('Decrease by 1')
    expect(decrement_button).toBeDisabled()
  })

  it('should set count state to 1 if clicked increment button once', async () => {

    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => {
          return Promise.resolve({ counter: 0 })
        },
      })
    )

    const { getByText, getByTestId } = render(WithoutStoreAdvanced)
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))

    // sleep 1 second
    await new Promise(resolve => setTimeout(resolve, 1000))

    const increment_button = getByText('Increase by 1')
    await fireEvent(increment_button, new MouseEvent('click'))

    const count_result = getByTestId('count-result')
    expect(count_result).toHaveTextContent('count is 1')
  })

  it('should set count state to 0 if clicked increment button once and then clicked decrement button once', async () => {

    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ counter: 0 }),
      })
    )

    const { getByText, getByTestId } = render(WithoutStoreAdvanced)
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))

    // sleep 1 second
    await new Promise(resolve => setTimeout(resolve, 1000))

    const increment_button = getByText('Increase by 1')
    await fireEvent(increment_button, new MouseEvent('click'))

    const decrement_button = getByText('Decrease by 1')
    await fireEvent(decrement_button, new MouseEvent('click'))

    const count_result = getByTestId('count-result')
    expect(count_result).toHaveTextContent('count is 0')
  })
})

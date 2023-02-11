import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import WithStore from '../pages/WithStore.vue'

describe('WithStore component', () => {

  it('should disable decrement Button if count is already zero', async () => {

    const { getByText } = render(WithStore, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              counter: { count: 0 }
            }
          }
        )],
      },
    })

    const decrement_button = getByText('Decrease by 1')

    expect(decrement_button).toBeDisabled()
  })

  it('should display count state correctly', async () => {

    const { getByTestId } = render(WithStore, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              counter: { count: 9989 }
            }
          }
        )],
      },
    })

    const count_result = getByTestId('count-result')

    expect(count_result).toHaveTextContent('count is 9989')
  })
})

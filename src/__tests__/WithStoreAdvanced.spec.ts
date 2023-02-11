import '@testing-library/jest-dom'
import { render } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import WithStoreAdvanced from '../pages/WithStoreAdvanced.vue'

describe('WithStoreAdvanced component', () => {

  it('should disable decrement Button if count is already zero', async () => {

    const { getByText } = render(WithStoreAdvanced, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              counter_advanced: { count: 0 }
            }
          })
        ],
      }
    })

    const decrement_button = getByText('Decrease by 1')
    expect(decrement_button).toBeDisabled()
  })
})

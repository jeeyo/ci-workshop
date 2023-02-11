import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import useCounterStore from './CounterStore'

describe('CounterStore', () => {

  beforeEach(() => {
    // arrange
    setActivePinia(
      createTestingPinia({
        initialState: {
          counter: { count: 2 }
        },
        stubActions: false
      })
    )
  })

  it('should increase counter state by one on invoking method increaseBy(1)', () => {
    // act
    const store = useCounterStore()
    store.increaseBy(1)

    // assert
    expect(store.count).toBe(3)
  })

  it('should decrease counter state by one on invoking method decreaseBy(1)', () => {
    // act
    const store = useCounterStore()
    store.decreaseBy(1)

    // assert
    expect(store.count).toBe(1)
  })

  it('should not decrease counter state on invoking method decreaseBy(1) if count is already zero', () => {

    // arrange
    setActivePinia(
      createTestingPinia({
        initialState: {
          counter: { count: 0 }
        },
        stubActions: false
      })
    )

    // act
    const store = useCounterStore()
    store.decreaseBy(1)

    // assert
    expect(store.count).toBe(0)
  })
})

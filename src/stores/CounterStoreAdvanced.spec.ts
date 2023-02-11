import { setActivePinia, createPinia } from 'pinia'
import AdvancedCounterStoreFactory from './CounterStoreAdvanced'

describe('CounterStoreAdvanced', () => {

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should increase counter state by one on invoking method increaseBy(1)', async () => {

    // arrange
    const mockFetchInitialState = async () => {
      return Promise.resolve({ counter: 2 })
    }
    const useCounterStore = AdvancedCounterStoreFactory(mockFetchInitialState)

    // act
    const store = useCounterStore()
    await store.load()
    store.increaseBy(1)

    // assert
    expect(store.count).toBe(3)
  })

  it('should decrease counter state by one on invoking method decreaseBy(1)', async () => {

    // arrange
    const mockFetchInitialState = async () => {
      return Promise.resolve({ counter: 2 })
    }
    const useCounterStore = AdvancedCounterStoreFactory(mockFetchInitialState)

    // act
    const store = useCounterStore()
    await store.load()
    store.decreaseBy(1)

    // assert
    expect(store.count).toBe(1)
  })

  it('should not decrease counter state on invoking method decreaseBy(1) if count is already zero', () => {

    // arrange
    const mockFetchInitialState = async () => {
      return Promise.resolve({ counter: 0 })
    }
    const useCounterStore = AdvancedCounterStoreFactory(mockFetchInitialState)

    // act
    const store = useCounterStore()
    store.decreaseBy(1)

    // assert
    expect(store.count).toBe(0)
  })
})

import Actions from '../alt/actions'
import alt from '../alt'
export function store(contextName) {
  return function constructClass(Class) {
    // store creation
    Object.defineProperty(Actions, 'name', {value: `${contextName}Actions`})
    const actions = alt.createActions(Actions)
    const store = class {
      constructor() {
        this.bindListeners({
          updateStore: actions.updateStore
        })

        this.state = {}
      }

      updateStore(data) {
        this.setState(JSON.parse(JSON.stringify(data)))
      }
    }

    const _initProxy = function _initProxy(instance) {
      return new Proxy(instance, {
        get: (target, key) => {
          if (key === 'execute') {
            return async function() {
              const response = await target[key](...arguments)
              alt.getActions(`${contextName}Actions`).updateStore(response)

              return response
            }
          }

          return target[key]
        }
      })
    }

    return (...args) => {
      const instance = new Class(...args)
      instance.store =
        alt.getStore(`${contextName}Store`) ||
        alt.createStore(store, `${contextName}Store`)
      return _initProxy(instance)
    }
  }
}

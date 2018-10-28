import React from 'react'

export default function connectToStores(WrappedComponent, contexts) {
  const WrappedContainer = class extends React.Component {
    constructor(props, context) {
      super(props, context)
      const {domain} = context
      this.stores = {}
      contexts.forEach(([contextName, contextCallback]) => {
        this.stores[contextName] = domain.flux.getStore(`${contextName}Store`)
        contextCallback = contextCallback || (data => data)
        this[`handle${contextName}Change`] = data => {
          this.setState({
            store: {
              ...this.state.store,
              [contextName]: {...contextCallback(data)}
            }
          })
        }

        this[`handle${contextName}ChangeOnInstantiate`] = data =>
          contextCallback(data)
      })
      let store = {}
      Object.keys(this.stores).forEach(key => {
        const storeInstance = this.stores[key]
        store[key] = this[`handle${key}ChangeOnInstantiate`](
          storeInstance.getState()
        )
      })
      this.state = {
        store
      }
    }

    componentDidMount() {
      return Object.keys(this.stores).map(key => {
        const store = this.stores[key]
        return store.listen(this[`handle${key}Change`])
      })
    }

    componentWillUnmount() {
      return Object.keys(this.stores).map(key => {
        const store = this.stores[key]
        return store.unlisten(this[`handle${key}Change`])
      })
    }

    render() {
      return <WrappedComponent store={this.state.store} {...this.props} />
    }
  }

  WrappedContainer.contextTypes = WrappedComponent.contextTypes
  WrappedContainer.getInitialProps = WrappedComponent.getInitialProps

  return WrappedContainer
}

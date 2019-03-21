import React, { Component, Fragment } from 'react';

import Modal from '../../common/modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }

    constructor(props) {
      super(props);
      this.intRequest = axios.interceptors.request.use(request => {
        this.setState({ error: false });
        return request;
      });
      this.intResponse = axios.interceptors.response.use(response => {
        return response;
      }, error => {
        this.setState({ error: error });
      });
    }

    closeModalHandler = () => {
      this.setState({ error: false });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.intRequest);
      axios.interceptors.response.eject(this.intResponse);
    }

    render() {
      return (
        <Fragment>
          <WrappedComponent { ...this.props } />
          <Modal show={ this.state.error } hide={ this.closeModalHandler }>
            <h1>Oops! <span>Something went wrong.</span></h1>
            { this.state.error ? this.state.error.message : null }
          </Modal>
        </Fragment>
      );
    }
  };
}

export default withErrorHandler;

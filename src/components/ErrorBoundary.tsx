import { Component } from "react";

class ErrorBoundary extends Component<IProps, IState> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface IProps {
  fallback: React.ReactNode;
}

interface IState {
  hasError: boolean;
  error: Error | null;
}

export { ErrorBoundary };

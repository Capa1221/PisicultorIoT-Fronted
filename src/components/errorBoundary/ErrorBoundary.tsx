import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorFallback } from "./ErrorFalback";

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error;
  errorInfo: ErrorInfo;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

  state = { hasError: false, error: new Error(), errorInfo: { componentStack: '' } };

  public static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  private resetErrorBoundary = () => {
    this.setState({ hasError: false });
  }

  render() {

    if (this.state.hasError) {
      return (
        <ErrorFallback resetErrorBoundary={this.resetErrorBoundary}
          error={this.state.error}
          componentError={this.state.errorInfo?.componentStack.split("\n")[1]}
        />
      );
    }
    return this.props.children;
  }
}
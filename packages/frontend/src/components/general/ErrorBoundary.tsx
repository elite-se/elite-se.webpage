import * as React from 'react';

/**
 * Properties of Error Boundary
 */
export interface ErrorBoundaryProps {
  /**
   * Callback used to render ui for the error once it occured
   */
  readonly errorRenderer?: (error: Error) => React.ReactNode;
}

interface State {
  readonly error?: Error;
}

function renderError(error: Error): React.ReactNode {
  return error.message;
}

/**
 * ErrorBoundary component catches all errors that occur somewhere bellow in the DOM
 * tree and displays an error message instead of taking the entire page down.
 *
 * Use by wrapping it around failable components in JSX
 * or use the withErrorBoundary(...) to wrap component components
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Caught error:', error, 'with info:', info);
    console.trace();
  }

  render() {
    const { error } = this.state;
    if (error) {
      return renderError(error);
    }
    return <>{this.props.children}</>;
  }
}

/**
 * ErrorBoundary component catches all errors that occur somewhere bellow in the DOM
 * tree and displays an error message instead of taking the entire page down.
 *
 * Use by wrapping it around failable components in JSX, i.e., <ErrorBoundary>...</ErrorBoundary>
 * or using this component wrapper
 *
 * @param WrappedComponent component to wrap
 * @param errorRenderer callback to render error ui
 */
export function withErrorBoundary<TProps>(
  WrappedComponent: React.ComponentType<TProps>,
  errorRenderer: (error: Error) => React.ReactNode = renderError,
): React.ComponentType<TProps> {
  return (props: TProps) => (
    <ErrorBoundary errorRenderer={errorRenderer}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
}

import React from 'react';

/**
 * ErrorBoundary Component
 * 
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing.
 * 
 * Usage:
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 */

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error);
    console.error('Error Info:', errorInfo);

    // Update state with error details
    this.setState(prevState => ({
      error,
      errorInfo,
      errorCount: prevState.errorCount + 1,
    }));

    // Optionally send to error tracking service
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    // Reset error boundary state
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });

    // Optionally reload the page
    // window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const isDevelopment = process.env.NODE_ENV === 'development';

      return (
        <div className="min-h-screen bg-linear-to-br from-red-900 to-red-950 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-red-800 border border-red-600 rounded-lg shadow-2xl p-8">
            {/* Error Icon */}
            <div className="flex justify-center mb-6">
              <div className="text-6xl">💥</div>
            </div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-red-100 text-center mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-red-200 text-center mb-6 text-sm">
              We're sorry! An unexpected error occurred. Our team has been notified.
            </p>

            {/* Development Error Details */}
            {isDevelopment && this.state.error && (
              <div className="bg-red-900 bg-opacity-50 border border-red-600 rounded p-4 mb-6 overflow-auto max-h-48">
                <h2 className="text-sm font-semibold text-red-100 mb-2">
                  📋 Error Details (Development Only):
                </h2>
                
                <div className="text-xs text-red-200 space-y-2 font-mono">
                  <div>
                    <p className="font-bold">Error Message:</p>
                    <p className="text-red-300">{this.state.error.toString()}</p>
                  </div>

                  {this.state.errorInfo && (
                    <div>
                      <p className="font-bold mt-3">Component Stack:</p>
                      <pre className="text-red-300 whitespace-pre-wrap break-words">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}

                  <div>
                    <p className="font-bold mt-3">Error Count: {this.state.errorCount}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Production Error Message */}
            {!isDevelopment && (
              <div className="bg-red-900 bg-opacity-30 border border-red-600 rounded p-4 mb-6">
                <p className="text-red-200 text-sm">
                  Error ID: <code className="text-red-300">{Date.now()}</code>
                </p>
                <p className="text-red-200 text-xs mt-2">
                  Please share this ID with support if the issue persists.
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={this.handleReset}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded transition-colors"
              >
                🔄 Try Again
              </button>

              <button
                onClick={() => {
                  // Go back to home
                  window.location.href = '/';
                }}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded transition-colors"
              >
                🏠 Go Home
              </button>

              <button
                onClick={() => {
                  // Reload the page completely
                  window.location.reload();
                }}
                className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded transition-colors text-sm"
              >
                🔃 Reload Page
              </button>
            </div>

            {/* Help Text */}
            <div className="mt-6 pt-6 border-t border-red-700 text-center">
              <p className="text-red-200 text-xs mb-2">
                If the problem persists, please:
              </p>
              <ul className="text-red-300 text-xs space-y-1">
                <li>✓ Clear your browser cache</li>
                <li>✓ Check your internet connection</li>
                <li>✓ Try a different browser</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    // No error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;

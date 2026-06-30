import { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { setToastCallback } from '../../reducers/AppReducer';
import type { Toast } from '../../configs/Types';

export default function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    setToastCallback((toast: Toast) => {
      setToasts((prev) => [...prev, toast]);
      
      if (toast.duration !== 0) {
        setTimeout(() => {
          removeToast(toast.id);
        }, toast.duration || 3000);
      }
    });

    return () => {
      setToastCallback(() => {});
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getIcon = (type: Toast['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'error':
        return <AlertCircle className="text-red-500" size={20} />;
      case 'warning':
        return <AlertTriangle className="text-yellow-500" size={20} />;
      case 'info':
      default:
        return <Info className="text-blue-500" size={20} />;
    }
  };

  const getBgClass = (type: Toast['type']) => {
    switch (type) {
      case 'success': return 'bg-white border-l-4 border-green-500 dark:bg-gray-800';
      case 'error': return 'bg-white border-l-4 border-red-500 dark:bg-gray-800';
      case 'warning': return 'bg-white border-l-4 border-yellow-500 dark:bg-gray-800';
      case 'info':
      default: return 'bg-white border-l-4 border-blue-500 dark:bg-gray-800';
    }
  };

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-start gap-3 p-4 rounded-lg shadow-lg pointer-events-auto transition-all animate-toast-in ${getBgClass(toast.type)}`}
        >
          <div className="shrink-0 mt-0.5">{getIcon(toast.type)}</div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed">
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="shrink-0 p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}

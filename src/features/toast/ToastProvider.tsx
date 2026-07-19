import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

interface Toast {
  id: string;
  title: string;
  type: 'success' | 'error';
}

interface ToastContextValue {
  showToast: (title: string, type?: Toast['type']) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((title: string, type: Toast['type'] = 'success') => {
    const id = crypto.randomUUID();
    setToasts((previous) => [...previous, { id, title, type }]);

    window.setTimeout(() => {
      setToasts((previous) => previous.filter((toast) => toast.id !== id));
    }, 3500);
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed right-4 top-20 z-[90] flex w-[min(92vw,24rem)] flex-col gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="pointer-events-auto rounded-2xl border border-white/20 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 shadow-soft backdrop-blur"
              role="status"
              aria-live="polite"
            >
              <p className="flex items-center gap-2">
                {toast.type === 'success' ? (
                  <FiCheckCircle className="text-emerald-400" />
                ) : (
                  <FiXCircle className="text-rose-400" />
                )}
                {toast.title}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

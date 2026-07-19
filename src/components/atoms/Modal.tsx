import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { FiX } from 'react-icons/fi';

interface ModalProps extends PropsWithChildren {
  open: boolean;
  title: string;
  onClose: () => void;
}

export const Modal = ({ open, title, onClose, children }: ModalProps) => (
  <AnimatePresence>
    {open ? (
      <motion.div
        className="fixed inset-0 z-50 grid place-items-center bg-slate-950/55 px-4 backdrop-blur-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="presentation"
      >
        <motion.section
          className="w-full max-w-2xl rounded-2xl border border-white/20 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-slate-900"
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 14, opacity: 0 }}
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <header className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-2xl text-slate-950 dark:text-white">{title}</h3>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Close modal"
            >
              <FiX />
            </button>
          </header>
          {children}
        </motion.section>
      </motion.div>
    ) : null}
  </AnimatePresence>
);

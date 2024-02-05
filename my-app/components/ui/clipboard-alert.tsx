import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface ClipboardAlertProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClipboardAlert = ({ show, setShow }: ClipboardAlertProps) => {
  useEffect(() => {
    if (show) {
      const timeoutId = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [show, setShow]);

  return (

    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="fixed bottom-12 right-12 m-4 w-64 text-lg font-bold"
        >
          <Alert variant='confirmation'>
            <Terminal className="h-4 w-4 " />
            <AlertTitle>Copied to Clipboard</AlertTitle>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>

  );
}

export default ClipboardAlert;



//bg-gradient-to-r from-deep-sea-600 to-deep-sea-400
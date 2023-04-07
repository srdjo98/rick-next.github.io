import CloseIcon from '@mui/icons-material/Close';
import { Alert } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { ReactElement, createContext, useContext, useState } from 'react';

interface Props {
  children: ReactElement;
}

interface NotifyProps {
  open?: boolean;
  close?: boolean;
  duration?: number;
  message?: string;
}

const useSnack = () => {
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(3000);
  const [message, setMessage] = useState('error');

  const notify = ({
    open = false,
    duration = 3000,
    message = 'Error',
  }: NotifyProps) => {
    setOpen(open);
    setDuration(duration);
    setMessage(message);
  };

  return {
    notify,
    value: {
      open,
      onClose: () => setOpen(false),
      duration,
      message,
    },
  };
};

const SnackbarContext = createContext<any>({});

export const SnackbarProvider = ({ children }: Props) => {
  const { notify, value } = useSnack();

  return (
    <SnackbarContext.Provider value={{ notify }}>
      <>
        {children}
        <Snackbar
          open={value.open}
          autoHideDuration={value.duration}
          onClose={value.onClose}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          sx={{ pt: '4.375rem' }}
        >
          <Alert icon={false} severity='success'>
            {value.message}
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={value.onClose}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          </Alert>
        </Snackbar>
      </>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);

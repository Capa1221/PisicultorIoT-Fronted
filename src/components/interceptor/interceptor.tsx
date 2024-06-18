import { ReactElement, useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import Spinnerlazyload from '../spinner/spinner-lazy-load';


interface IInterceptorProps {
  children: ReactElement;
}

export function Interceptor({ children }: IInterceptorProps) {

  const [loading, setLoading] = useState(false);
  const { isOpen, onOpenChange } = useDisclosure();
  const [message, setMessage] = useState<string | null>(null);
  const [isRequest, setIsRequest] = useState(false);

  const handleResponseError = async (error: AxiosError) => {
    if (!error.response) {
      setMessage(error.message);
      throw error.message;
    }
    const { message } = error.response.data as any;
    setMessage(message || error.message);
    throw message || error.message;
  };

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use((request) => {
      console.log("request", request);

      setLoading(true);
      setIsRequest(true);
      setMessage(null);
      return request;
    });

    const responseInterceptor = axios.interceptors.response.use(
      (response: AxiosResponse) => {
        setLoading(false);
        return response;
      },
      async (error: AxiosError) => {
        setLoading(false);
        onOpenChange();
        return await handleResponseError(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  return (
    <>
      {isRequest && loading &&
        <Spinnerlazyload/>
      }
      {isRequest && message &&
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Error</ModalHeader>
            <ModalBody>
              <p>
                {message}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={() => onClose()}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
      }
      {isRequest && !loading && !message && <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Error</ModalHeader>
            <ModalBody>
              <p>
                {message}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={() => onClose()}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>}
      {children}
    </>
  );
}
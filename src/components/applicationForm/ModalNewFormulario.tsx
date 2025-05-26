import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure
} from '@nextui-org/react';
import {
  BiUser,
  BiEnvelope,
  BiPhone,
  BiNote,
  BiLock
} from 'react-icons/bi';
import { GrFormEdit } from 'react-icons/gr';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { crearFormulario } from '../../services/Formulario-Sesion';

const FormularioSchema = z.object({
  usuario: z.string().min(3, 'El usuario debe tener al menos 3 caracteres'),
  nombres: z.string().min(3, 'El nombre es obligatorio'),
  email: z.string().email('Correo no válido'),
  telefono: z.string().min(7, 'Teléfono no válido'),
  observacion: z.string().min(10, 'Explica brevemente tu interés'),
  clave: z.string().min(6, 'La clave debe tener al menos 6 caracteres')
});

type FormularioType = z.infer<typeof FormularioSchema>;

export const ModalNewFormulario = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormularioType>({
    resolver: zodResolver(FormularioSchema),
    defaultValues: {
      usuario: '',
      nombres: '',
      email: '',
      telefono: '',
      observacion: '',
      clave: ''
    }
  });

  const onSubmit = async (data: FormularioType) => {
    try {
      const response = await crearFormulario(data);
      if (response.status === 200) {
        toast.success('✅ ¡Formulario enviado con éxito!');
        reset();
        onClose();
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.error('Error al crear el formulario', error);
      toast.error('❌ Hubo un error al enviar el formulario');
    }
  };

  return (
    <>
      <Button
        color="primary"
        startContent={<GrFormEdit className="text-xl" />}
        onPress={onOpen}
        className="font-semibold py-2 px-6 bg-primary text-white rounded-xl shadow-md hover:shadow-lg transition-all"
      >
        Realizar Formulario
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="lg">
        <ModalContent>
          {onClose => (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <ModalHeader className="text-2xl text-center font-bold text-gray-800">
                Formulario de Solicitud
              </ModalHeader>
              <ModalBody className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    {...register('usuario')}
                    label="Usuario"
                    isInvalid={!!errors.usuario}
                    errorMessage={errors.usuario?.message}
                    startContent={<BiUser className="text-2xl text-primary" />}
                  />
                  <Input
                    {...register('nombres')}
                    label="Nombre completo"
                    isInvalid={!!errors.nombres}
                    errorMessage={errors.nombres?.message}
                    startContent={<BiUser className="text-2xl text-primary" />}
                  />
                </div>
                <Input
                  {...register('email')}
                  label="Correo electrónico"
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                  startContent={<BiEnvelope className="text-2xl text-primary" />}
                />
                <Input
                  {...register('telefono')}
                  label="Número de teléfono"
                  isInvalid={!!errors.telefono}
                  errorMessage={errors.telefono?.message}
                  startContent={<BiPhone className="text-2xl text-primary" />}
                />
                <Textarea
                  {...register('observacion')}
                  label="¿Por qué deseas participar?"
                  isInvalid={!!errors.observacion}
                  errorMessage={errors.observacion?.message}
                  minRows={3}
                  startContent={<BiNote className="text-2xl text-primary" />}
                />
                <Input
                  {...register('clave')}
                  label="Clave"
                  type="password"
                  isInvalid={!!errors.clave}
                  errorMessage={errors.clave?.message}
                  startContent={<BiLock className="text-2xl text-primary" />}
                />
              </ModalBody>
              <ModalFooter className="flex justify-end gap-4">
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" type="submit" isLoading={isSubmitting}>
                  Guardar
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

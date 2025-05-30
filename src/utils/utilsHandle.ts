import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { FormularioInterface, ImageHandler } from '../services/interfaces';

export const handleInputChange = <T>(
  e: ChangeEvent<HTMLInputElement>,
  setState: Dispatch<SetStateAction<T>>,
  state: T
) => {
  const { name, value } = e.target;
  setState({ ...state, [name]: value });
};

export const handleSelectChange = <T>(
  key: string,
  value: string,
  setState: Dispatch<SetStateAction<T>>,
  state: T
) => {
  setState({ ...state, [key]: value });
};

export const handleTextareaChange = (
  value: string,
  setState: Dispatch<SetStateAction<FormularioInterface>>
) => {
  setState((prevState) => ({
    ...prevState,
    observacion: value,
  }));
};


export const useImageHandler = (): ImageHandler => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isImageValid, setIsImageValid] = useState<boolean>(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (allowedTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          setImagePreview(reader.result as string);
          setIsImageValid(true);
        };
        reader.readAsDataURL(file);
      } else {
        setIsImageValid(false);
        setImagePreview(null);
      }
    } else {
      setIsImageValid(false);
      setImagePreview(null);
    }
  };

  sessionStorage.setItem("imageBase64",imagePreview!);
  return { imagePreview, isImageValid, handleImageChange };
};
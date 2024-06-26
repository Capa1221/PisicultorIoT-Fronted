import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export const handleInputChange = <T>(
  e: ChangeEvent<HTMLInputElement>,
  setState: Dispatch<SetStateAction<T>>,
  state: T
) => {
  const { name, value } = e.target;
  setState({ ...state, [name]: value });
};

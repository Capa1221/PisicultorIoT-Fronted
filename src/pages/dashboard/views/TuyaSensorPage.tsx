import React, { FC } from 'react';
import TuyaSensorTable from '../../../components/Tuya/TuyaSensorTable';

const TuyaSensorPage: FC = () => {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold mb-8">Datos de Sensores Tuya</h1>
      <TuyaSensorTable />
    </main>
  );
};

export default TuyaSensorPage;

import React, { useCallback } from 'react';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import Test from '../components/test';

const TEST = () => {
  const a = 1;
  return (
    <AppLayout>
      TEST PAGE
      <Test />
    </AppLayout>
  );
};

export default TEST;

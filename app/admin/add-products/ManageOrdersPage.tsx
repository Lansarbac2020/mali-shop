import { Suspense } from 'react';
import AddProductForm from './AddProductForm';

const ManageOrdersPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddProductForm />
    </Suspense>
  );
};

export default ManageOrdersPage;

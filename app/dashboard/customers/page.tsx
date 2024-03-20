import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import customersList from '@/app/lib/placeholder-data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function CustomersPage() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        {/* <h1 className={`${lusitana.className} text-2xl`}>Customers</h1> */}
        <CustomersTable customers={[customersList]} />
      </div>
    </div>
  );
}

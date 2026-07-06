import React from 'react';
import { SubpageLayout } from '../../components/ui/SubpageLayout';
import { ContactoSection } from '../../components/sections/ContactoSection';

export default function ContactoPage() {
  const breadcrumbs = [
    { name: 'Contacto', path: '/contacto' }
  ];

  return (
    <SubpageLayout title="Contáctanos" breadcrumbs={breadcrumbs}>
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 -my-16">
        <ContactoSection />
      </div>
    </SubpageLayout>
  );
}

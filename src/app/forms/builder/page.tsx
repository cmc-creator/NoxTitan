'use client';

import React from 'react';
import FormBuilder from '@/components/FormBuilder';
import { useRouter } from 'next/navigation';

export default function FormBuilderPage() {
  const router = useRouter();

  const handleSave = async (fields: any, settings: any) => {
    try {
      const response = await fetch('/api/forms/templates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields, ...settings }),
      });

      if (response.ok) {
        router.push('/forms');
      } else {
        console.error('Failed to save form');
      }
    } catch (error) {
      console.error('Error saving form:', error);
    }
  };

  return <FormBuilder onSave={handleSave} />;
}


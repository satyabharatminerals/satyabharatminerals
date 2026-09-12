'use client';

import React from 'react';

export interface JsonLdProps {
  data: Record<string, any> | Record<string, any>[];
}

/**
 * Centralized JSON-LD component to handle all structured data.
 * Supports passing a single schema object or an array of schema objects.
 */
const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;

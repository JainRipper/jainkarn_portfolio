import { useState, useEffect } from 'react';

export const truncation = (str: string, length: number) => {
    return (str.length > length ? str.substring(0, length) + '...' : str);
  }
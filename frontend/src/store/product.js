import { useState } from 'react';
import { create } from 'zustand';

// Global state
export const useProductStore = create((set) => ({
    products:[],
    setProducts: (products) => set({ products }),
}))

// local state
// const [state , useState] = useState([])
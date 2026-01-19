// src/lib/storage.ts

export const storage = {
  get: async (key: string) => {
    if (typeof window === 'undefined') return null;
    const value = localStorage.getItem(key);
    return value ? { value } : null;
  },
  set: async (key: string, value: string) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, value);
  }
};

// Inyectamos el storage en window para que tu código original funcione sin cambios
if (typeof window !== 'undefined') {
  (window as any).storage = storage;
}
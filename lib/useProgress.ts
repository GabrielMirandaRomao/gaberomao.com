"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "roadmap-android-v1";

type Done = Record<string, true>;

// Guarda os tópicos concluídos no localStorage do navegador.
export function useProgress() {
  const [done, setDone] = useState<Done>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- leitura única do localStorage após montar
      if (saved) setDone(JSON.parse(saved));
    } catch {
      // localStorage indisponível (modo privado, por exemplo): segue sem salvar
    }
  }, []);

  const persist = (next: Done) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
    return next;
  };

  const toggle = useCallback((id: string) => {
    setDone((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      return persist(next);
    });
  }, []);

  const reset = useCallback(() => setDone(persist({})), []);

  return { done, toggle, reset };
}

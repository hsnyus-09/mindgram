import { create } from 'zustand';
import { db } from './db';

type NodeType = { id: string; label: string; x: number; y: number; children: string[] };

type State = {
  nodes: NodeType[];
  selectedNode: NodeType | null;
  selectNode(id: string): void;
  expandNode(id: string): void;
  recommendNode(id: string): void;
  authenticated: boolean;
  user: string | null;
  signUp(username: string, password: string): Promise<boolean>;
  login(username: string, password: string): Promise<boolean>;
  logout(): void;
};

export const useStore = create<State>((set, get) => {
  const currentUser = localStorage.getItem('currentUser');
  return {
    nodes: [{ id: '1', label: '아이디어', x: 200, y: 200, children: [] }],
    selectedNode: null,
    selectNode: (id: string) => set({ selectedNode: get().nodes.find(n => n.id === id) || null }),
    expandNode: (id: string) => { console.log('expand', id); },
    recommendNode: (id: string) => { console.log('recommend', id); },
    authenticated: localStorage.getItem('currentUser') !== null,
    user: localStorage.getItem('currentUser'),
    signUp: async (username, password) => {
      const exists = await db.users.get(username);
      if (exists) return false;
      await db.users.add({ username, password });
      localStorage.setItem('currentUser', username);
      set({ authenticated: localStorage.getItem('currentUser') !== null, user: username });
      return true;
    },
    login: async (username, password) => {
      const rec = await db.users.get(username);
      if (rec && rec.password === password) {
        localStorage.setItem('currentUser', username);
        set({ authenticated: localStorage.getItem('currentUser') !== null, user: username });
        return true;
      }
      return false;
    },
    logout: () => {
      localStorage.removeItem('currentUser');
      set({ authenticated: localStorage.getItem('currentUser') !== null, user: null });
    }
  };
});

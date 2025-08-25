// xpStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useXpStore = create(
  persist(
    (set) => ({
      xp: 0,
      addXp: () => set((state) => ({ xp: state.xp + 3 })),
      deductXp: () => set((state) => ({ xp: Math.max(0, state.xp - 1) })), // prevents negative XP
    }),
    {
      name: 'xp-storage', // key in localStorage
    }
  )
)

export default useXpStore

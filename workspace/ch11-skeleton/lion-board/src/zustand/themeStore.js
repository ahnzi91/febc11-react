import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const ThemeStore = (set) => ({
  isDarkMode: false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
});

// 스토리지를 사용하지 않을 경우
// const useUserStore = create(UserStore);

// 스토리지를 사용할 경우
const useThemeStore = create(
  persist(ThemeStore, {
    name: "themeStore",
  })
);

export default useThemeStore;

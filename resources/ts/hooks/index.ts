// src/hooks/index.ts
import type { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

// ✅ 型付き版の useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// ✅ 型付き版の useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

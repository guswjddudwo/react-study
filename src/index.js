import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "./App";
import Nested from "./pages/Nested";
import HooksLayout from "./pages/hooks/Hooks";
import Todo from "./pages/todo/Todo";
import CounterPage from "./pages/hooks/Counter";

import "./index.css";
import EffectPage from "./pages/hooks/Effect";
import SigninPage from "./pages/singnin/Singnin";
import ProductRegisterPage from "./pages/form/ProductRegister";

// createBrowserRouter : Browser Component를 반환
// createRouterFromElements : Routes Compoment를 반환
// Route
// path: url 경로
// element: path 경로에 맞춰 보여줄 Compoment
// RouterProvider에 router옵션에 제공되야지만 동작
// 슬레시(/) 경로는 root 경로 (도메인에 아무 경로도 안 넣었을 경우)
// 동일 레벨일 경우에는 path='/ComponentName' 이렇게 하기

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="nested" element={<Nested />} />
      <Route path="todo" element={<Todo />} />
      <Route path="hooks" element={<HooksLayout />}>
        <Route index element={<CounterPage />} />
        <Route path="counter" element={<CounterPage />} />
        <Route path="effect" element={<EffectPage />} />
      </Route>
      <Route path="signin" element={<SigninPage />} />
      <Route path="form" element={<ProductRegisterPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  route("login", "routes/login.tsx"),
  layout("routes/protected.tsx", [
    index("routes/dashboard.tsx"),
    route("employees", "routes/employees.tsx"),
    route("employees/new", "routes/employees-create.tsx"),
    route("employees/:id", "routes/employees-edit.tsx"),
  ]),
] satisfies RouteConfig;

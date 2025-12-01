import { useState } from "react";
import { Link, useNavigate } from "react-router";

interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  department: string;
}

const MOCK_EMPLOYEES: Employee[] = [
  {
    id: "1",
    name: "Ana Silva",
    email: "ana.silva@empresa.com",
    role: "Desenvolvedora Frontend",
    status: "active",
    department: "Engenharia",
  },
  {
    id: "2",
    name: "Carlos Santos",
    email: "carlos.santos@empresa.com",
    role: "Product Manager",
    status: "active",
    department: "Produto",
  },
  {
    id: "3",
    name: "Mariana Costa",
    email: "mariana.costa@empresa.com",
    role: "Designer UX/UI",
    status: "inactive",
    department: "Design",
  },
];

export function EmployeesListScreen() {
  const navigate = useNavigate();
  const [employees] = useState<Employee[]>(MOCK_EMPLOYEES);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Funcionários</h1>
          <p className="text-gray-400">Gerencie a equipe da sua empresa</p>
        </div>
        <Link 
          to="/employees/new"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
        >
          <span className="mr-2">+</span>
          Novo Funcionário
        </Link>
      </header>

      <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700/50 text-gray-400 text-sm uppercase tracking-wider">
                <th className="p-6 font-medium">Nome</th>
                <th className="p-6 font-medium">Cargo</th>
                <th className="p-6 font-medium">Departamento</th>
                <th className="p-6 font-medium">Status</th>
                <th className="p-6 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              {employees.map((employee) => (
                <tr 
                  key={employee.id} 
                  className="hover:bg-white/5 transition-colors group cursor-pointer"
                  onClick={() => navigate(`/employees/${employee.id}`)}
                >
                  <td className="p-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white mr-4">
                        {employee.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-white">{employee.name}</p>
                        <p className="text-sm text-gray-400">{employee.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-gray-300">{employee.role}</td>
                  <td className="p-6 text-gray-300">{employee.department}</td>
                  <td className="p-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        employee.status === "active"
                          ? "bg-green-500/10 text-green-400 border-green-500/20"
                          : "bg-red-500/10 text-red-400 border-red-500/20"
                      }`}
                    >
                      {employee.status === "active" ? "Ativo" : "Inativo"}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <button 
                      className="text-gray-400 hover:text-white mr-3 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/employees/${employee.id}`);
                      }}
                    >
                      ✏️
                    </button>
                    <button 
                      className="text-gray-400 hover:text-red-400 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle delete
                      }}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {employees.length === 0 && (
          <div className="p-12 text-center text-gray-400">
            Nenhum funcionário encontrado.
          </div>
        )}
      </div>
    </div>
  );
}

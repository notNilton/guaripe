import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

interface Employee {
  id?: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: "active" | "inactive";
  admissionDate: string;
  phone: string;
}

const MOCK_EMPLOYEE: Employee = {
  name: "",
  email: "",
  role: "",
  department: "",
  status: "active",
  admissionDate: "",
  phone: "",
};

export function EmployeesCrudScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  const [formData, setFormData] = useState<Employee>(MOCK_EMPLOYEE);

  useEffect(() => {
    if (isEditing && id) {
      // Simulate fetching data
      // In a real app, this would be an API call
      if (id === "1") {
        setFormData({
          id: "1",
          name: "Ana Silva",
          email: "ana.silva@empresa.com",
          role: "Desenvolvedora Frontend",
          department: "Engenharia",
          status: "active",
          admissionDate: "2023-01-15",
          phone: "(11) 99999-9999",
        });
      }
    }
  }, [isEditing, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save logic here
    console.log("Saving employee:", formData);
    navigate("/employees");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <button 
          onClick={() => navigate("/employees")}
          className="text-gray-400 hover:text-white mb-4 flex items-center transition-colors"
        >
          ← Voltar para lista
        </button>
        <h1 className="text-3xl font-bold text-white mb-2">
          {isEditing ? "Editar Funcionário" : "Novo Funcionário"}
        </h1>
        <p className="text-gray-400">
          {isEditing ? "Atualize as informações do funcionário" : "Preencha as informações para adicionar um novo funcionário"}
        </p>
      </header>

      <form onSubmit={handleSubmit} className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">Nome Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Ex: João Silva"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Corporativo</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="joao@empresa.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-medium text-gray-300">Cargo</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Ex: Desenvolvedor Senior"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="department" className="text-sm font-medium text-gray-300">Departamento</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              required
            >
              <option value="">Selecione...</option>
              <option value="Engenharia">Engenharia</option>
              <option value="Produto">Produto</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Vendas">Vendas</option>
              <option value="RH">RH</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-300">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="admissionDate" className="text-sm font-medium text-gray-300">Data de Admissão</label>
            <input
              type="date"
              id="admissionDate"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="status" className="text-sm font-medium text-gray-300">Status</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={formData.status === "active"}
                  onChange={handleChange}
                  className="mr-2 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-white">Ativo</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={formData.status === "inactive"}
                  onChange={handleChange}
                  className="mr-2 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-gray-400">Inativo</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-700/50">
          <button
            type="button"
            onClick={() => navigate("/employees")}
            className="px-6 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-900/20"
          >
            {isEditing ? "Salvar Alterações" : "Criar Funcionário"}
          </button>
        </div>
      </form>
    </div>
  );
}

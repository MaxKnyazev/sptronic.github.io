import { Outlet, Link, useLocation } from "react-router";
import { FileText, Users, LayoutDashboard, Plus, User } from "lucide-react";

export function Layout() {
  const location = useLocation();
  
  // Определяем роль пользователя на основе текущего пути
  const getUserRole = () => {
    if (location.pathname.includes('admin')) return 'admin';
    if (location.pathname.includes('support')) return 'support';
    return 'customer';
  };
  
  const role = getUserRole();
  
  // Меню для каждой роли
  const menuItems = {
    customer: [
      { path: '/customer/tickets', label: 'Мои обращения', icon: FileText },
      { path: '/customer/new-ticket', label: 'Новое обращение', icon: Plus },
    ],
    support: [
      { path: '/support/all-tickets', label: 'Все тикеты', icon: FileText },
      { path: '/support/users', label: 'Список пользователей', icon: Users },
    ],
    admin: [
      { path: '/admin/dashboard', label: 'Главный дашборд', icon: LayoutDashboard },
      { path: '/support/all-tickets', label: 'Все тикеты', icon: FileText },
      { path: '/support/users', label: 'Пользователи', icon: Users },
    ],
  };

  const currentMenu = menuItems[role];

  return (
    <div className="min-h-screen bg-[#E8F4F0]">
      {/* Хедер */}
      <header className="h-16 bg-white flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl text-[#333]">
            <span className="bg-[#2ecc71] text-white px-4 py-2">SPTronic</span>
          </h1>
        </div>
        
        <div className="flex items-stretch gap-4">
          <Link to="/customer/new-ticket" className="flex">
            <button className="bg-[#2ecc71] text-white px-6 py-2 hover:bg-[#27ae60] transition-colors flex items-center">
              Новый тикет
            </button>
          </Link>
          <div className="flex items-center gap-2 bg-[#D4E8E0] px-4 py-2">
            <User size={20} className="text-[#333]" />
            <div className="text-sm text-[#333]">
              <div>Иван Иванов</div>
              <div className="text-xs text-gray-500 capitalize">{role === 'customer' ? 'Клиент' : role === 'support' ? 'Саппорт' : 'Админ'}</div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Боковое меню */}
        <aside className="w-64 min-h-[calc(100vh-64px)] bg-white bg-[#e8f4f0]">
          <nav className="p-0">
            {currentMenu.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <button
                    className={`w-full flex items-center gap-3 px-6 py-4 transition-colors ${
                      isActive
                        ? 'bg-[#2ecc71] text-white'
                        : 'bg-white text-[#333] hover:bg-[#D4E8E0]'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                </Link>
              );
            })}
          </nav>
          
          {/* Переключатель ролей для демонстрации */}
          <div className="p-4 bg-[#D4E8E0] m-[0px]">
            <div className="text-xs text-gray-600 mb-2">Демо-переключатель:</div>
            <div className="space-y-0">
              <Link to="/customer/tickets">
                <button className="w-full text-left px-3 py-2 text-sm bg-white hover:bg-[#A8D5BA] text-[#333]">
                  Customer
                </button>
              </Link>
              <Link to="/support/all-tickets">
                <button className="w-full text-left px-3 py-2 text-sm bg-white hover:bg-[#A8D5BA] text-[#333]">
                  Support
                </button>
              </Link>
              <Link to="/admin/dashboard">
                <button className="w-full text-left px-3 py-2 text-sm bg-white hover:bg-[#A8D5BA] text-[#333]">Admin</button>
              </Link>
            </div>
          </div>
        </aside>

        {/* Основной контент */}
        <main className="flex-1 bg-[#ffffff]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
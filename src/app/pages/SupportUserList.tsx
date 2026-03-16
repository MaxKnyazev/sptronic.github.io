import { Link } from "react-router";
import { Search, ChevronRight, Mail, Phone, Calendar } from "lucide-react";

const users = [
  {
    id: 1,
    name: 'Иван Иванов',
    email: 'ivan@mail.ru',
    phone: '+7 (495) 123-45-67',
    ticketsCount: 5,
    activeTickets: 2,
    registrationDate: '15.01.2026',
    lastActivity: '15.03.2026',
  },
  {
    id: 2,
    name: 'Пётр Петров',
    email: 'petr@yandex.ru',
    phone: '+7 (495) 234-56-78',
    ticketsCount: 3,
    activeTickets: 1,
    registrationDate: '20.01.2026',
    lastActivity: '16.03.2026',
  },
  {
    id: 3,
    name: 'Сергей Сергеев',
    email: 'sergey@gmail.com',
    phone: '+7 (495) 345-67-89',
    ticketsCount: 8,
    activeTickets: 0,
    registrationDate: '10.01.2026',
    lastActivity: '12.03.2026',
  },
  {
    id: 4,
    name: 'Алексей Алексеев',
    email: 'alex@inbox.ru',
    phone: '+7 (495) 456-78-90',
    ticketsCount: 12,
    activeTickets: 3,
    registrationDate: '05.01.2026',
    lastActivity: '17.03.2026',
  },
  {
    id: 5,
    name: 'Дмитрий Дмитриев',
    email: 'dmitry@mail.ru',
    phone: '+7 (495) 567-89-01',
    ticketsCount: 6,
    activeTickets: 1,
    registrationDate: '18.01.2026',
    lastActivity: '14.03.2026',
  },
  {
    id: 6,
    name: 'Николай Николаев',
    email: 'nikolai@yandex.ru',
    phone: '+7 (495) 678-90-12',
    ticketsCount: 4,
    activeTickets: 1,
    registrationDate: '22.01.2026',
    lastActivity: '16.03.2026',
  },
];

export function SupportUserList() {
  return (
    <div>
      {/* Заголовок */}
      <div className="bg-white p-6">
        <h1 className="text-3xl text-[#333]">Список пользователей</h1>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-4 gap-0">
        <div className="bg-white p-4">
          <div className="text-2xl text-[#333] mb-1">245</div>
          <div className="text-sm text-gray-600">Всего клиентов</div>
        </div>
        <div className="bg-white p-4">
          <div className="text-2xl text-green-600 mb-1">18</div>
          <div className="text-sm text-gray-600">Активных сегодня</div>
        </div>
        <div className="bg-white p-4">
          <div className="text-2xl text-orange-600 mb-1">34</div>
          <div className="text-sm text-gray-600">С активными тикетами</div>
        </div>
        <div className="bg-white p-4">
          <div className="text-2xl text-blue-600 mb-1">12</div>
          <div className="text-sm text-gray-600">Новых за неделю</div>
        </div>
      </div>

      {/* Поиск */}
      <div className="bg-white p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Поиск по имени, email, телефону..."
            className="pl-10 pr-4 py-3 bg-[#F5F5F5] text-[#333] w-full focus:outline-none focus:bg-white"
          />
        </div>
      </div>

      {/* Список пользователей */}
      <div className="space-y-0">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white hover:bg-[#F9FCFB] transition-all"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#2ecc71] flex items-center justify-center text-white text-xl">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg text-[#333] mb-1">{user.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Mail size={14} />
                          <span>{user.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone size={14} />
                          <span>{user.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-6 bg-[#F9FCFB] p-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Всего тикетов</div>
                      <div className="text-xl text-[#333]">{user.ticketsCount}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Активных тикетов</div>
                      <div className="text-xl text-[#333]">{user.activeTickets}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Дата регистрации</div>
                      <div className="text-sm text-[#333] flex items-center gap-1">
                        <Calendar size={14} />
                        {user.registrationDate}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Последняя активность</div>
                      <div className="text-sm text-[#333]">{user.lastActivity}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-0 ml-6">
                  <Link to="/support/all-tickets">
                    <button className="px-6 py-2 bg-[#2ecc71] text-white hover:bg-[#27ae60] transition-colors flex items-center gap-2 whitespace-nowrap">
                      Все тикеты
                      <ChevronRight size={18} />
                    </button>
                  </Link>
                  <button className="px-6 py-2 bg-[#D4E8E0] text-[#333] hover:bg-[#A8D5BA] transition-colors whitespace-nowrap">
                    Профиль
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="text-sm text-[#333]">
          Показано 6 из 245 пользователей
        </div>
        <div className="flex items-center gap-0">
          <button className="px-4 py-2 bg-[#2ecc71] text-white">1</button>
          <button className="px-4 py-2 bg-white hover:bg-[#D4E8E0] text-[#333] transition-colors">2</button>
          <button className="px-4 py-2 bg-white hover:bg-[#D4E8E0] text-[#333] transition-colors">3</button>
          <button className="px-4 py-2 bg-white hover:bg-[#D4E8E0] text-[#333] transition-colors">...</button>
          <button className="px-4 py-2 bg-white hover:bg-[#D4E8E0] text-[#333] transition-colors">41</button>
        </div>
      </div>
    </div>
  );
}
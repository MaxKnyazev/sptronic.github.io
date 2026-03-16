import { Link } from "react-router";
import { Search, RefreshCw, TrendingUp, Users, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";

const recentTickets = [
  { id: '127', client: 'ivan@mail.ru', status: '🔴 Новый', module: 'ECULite Pro', priority: 'Высокий', date: '17.03 11:30' },
  { id: '126', client: 'petr@yandex.ru', status: '🟡 В работе', module: 'TruckPower', priority: 'Средний', date: '17.03 11:15' },
  { id: '125', client: 'alex@inbox.ru', status: '🟡 В работе', module: 'MaxEngine', priority: 'Высокий', date: '17.03 10:45' },
  { id: '124', client: 'sergey@gmail.com', status: '🟢 Закрыт', module: 'DieselBoost', priority: 'Низкий', date: '17.03 10:30' },
  { id: '123', client: 'dmitry@mail.ru', status: '🔴 Новый', module: 'EuroSmart', priority: 'Средний', date: '17.03 09:50' },
];

const supportStats = [
  { name: 'Иванов А.', activeTickets: 15, closedToday: 8, avgResponseTime: '45 мин', rating: '4.8' },
  { name: 'Петров И.', activeTickets: 12, closedToday: 6, avgResponseTime: '52 мин', rating: '4.7' },
  { name: 'Сидоров П.', activeTickets: 18, closedToday: 10, avgResponseTime: '38 мин', rating: '4.9' },
];

export function AdminDashboard() {
  return (
    <div>
      {/* Заголовок */}
      <div className="bg-white p-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-[#333]">Главный дашборд</h1>
        </div>
        <div className="text-sm text-gray-600">
          Последнее обновление: 17.03.2026 11:35
        </div>
      </div>

      {/* Главная статистика */}
      <div className="grid grid-cols-6 gap-0">
        <div className="col-span-2 bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <FileText size={32} className="text-[#2ecc71]" />
            <TrendingUp size={20} className="text-green-600" />
          </div>
          <div className="text-4xl text-[#333] mb-2">127</div>
          <div className="text-sm text-gray-600 mb-1">Всего тикетов</div>
          <div className="text-xs text-green-600">+12% за неделю</div>
        </div>

        <div className="bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <AlertCircle size={28} className="text-red-500" />
          </div>
          <div className="text-3xl text-red-600 mb-2">12</div>
          <div className="text-sm text-gray-600">Новых</div>
        </div>

        <div className="bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <Clock size={28} className="text-orange-500" />
          </div>
          <div className="text-3xl text-orange-600 mb-2">45</div>
          <div className="text-sm text-gray-600">В работе</div>
        </div>

        <div className="bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle size={28} className="text-green-500" />
          </div>
          <div className="text-3xl text-green-600 mb-2">70</div>
          <div className="text-sm text-gray-600">Закрыто</div>
        </div>

        <div className="bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <Users size={28} className="text-blue-500" />
          </div>
          <div className="text-3xl text-blue-600 mb-2">245</div>
          <div className="text-sm text-gray-600">Клиентов</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-0">
        {/* Статистика саппортов */}
        <div className="col-span-2">
          <div className="bg-white">
            <div className="bg-[#D4E8E0] px-6 py-4">
              <h2 className="text-lg text-[#333]">Эффективность саппортов</h2>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F9FCFB]">
                    <th className="px-4 py-3 text-left text-sm text-gray-600">Саппорт</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600">Активных</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600">Закрыто сегодня</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600">Ср. время ответа</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-600">Рейтинг</th>
                  </tr>
                </thead>
                <tbody>
                  {supportStats.map((support, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-white' : 'bg-[#F9FCFB]'
                      } hover:bg-[#E8F4F0] transition-colors`}
                    >
                      <td className="px-4 py-4 text-[#333]">{support.name}</td>
                      <td className="px-4 py-4 text-[#333]">{support.activeTickets}</td>
                      <td className="px-4 py-4 text-green-600">{support.closedToday}</td>
                      <td className="px-4 py-4 text-[#333]">{support.avgResponseTime}</td>
                      <td className="px-4 py-4">
                        <span className="px-3 py-1 bg-[#2ecc71] text-white">
                          ⭐ {support.rating}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Статистика по модулям */}
        <div className="bg-white">
          <div className="bg-[#D4E8E0] px-6 py-4">
            <h2 className="text-lg text-[#333]">По модулям</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="pb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-[#333]">ECULite Pro</span>
                <span className="text-sm text-[#333]">42</span>
              </div>
              <div className="w-full h-2 bg-[#E8F4F0]">
                <div className="h-full bg-[#2ecc71]" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="pb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-[#333]">TruckPower</span>
                <span className="text-sm text-[#333]">28</span>
              </div>
              <div className="w-full h-2 bg-[#E8F4F0]">
                <div className="h-full bg-[#52be80]" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="pb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-[#333]">MaxEngine</span>
                <span className="text-sm text-[#333]">24</span>
              </div>
              <div className="w-full h-2 bg-[#E8F4F0]">
                <div className="h-full bg-[#A8D5BA]" style={{ width: '38%' }}></div>
              </div>
            </div>
            <div className="pb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-[#333]">DieselBoost</span>
                <span className="text-sm text-[#333]">18</span>
              </div>
              <div className="w-full h-2 bg-[#E8F4F0]">
                <div className="h-full bg-[#2ecc71]" style={{ width: '28%' }}></div>
              </div>
            </div>
            <div className="pb-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-[#333]">EuroSmart</span>
                <span className="text-sm text-[#333]">15</span>
              </div>
              <div className="w-full h-2 bg-[#E8F4F0]">
                <div className="h-full bg-[#52be80]" style={{ width: '23%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Последние тикеты */}
      <div className="bg-white">
        <div className="bg-[#D4E8E0] px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg text-[#333]">Последние тикеты</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Поиск..."
                className="pl-9 pr-4 py-2 bg-white text-[#333] w-64 focus:outline-none"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#2ecc71] text-white hover:bg-[#27ae60] transition-colors">
              <RefreshCw size={18} />
              Обновить
            </button>
          </div>
        </div>
        
        <table className="w-full">
          <thead>
            <tr className="bg-[#F9FCFB]">
              <th className="px-6 py-4 text-left text-[#333]">ID</th>
              <th className="px-6 py-4 text-left text-[#333]">Клиент</th>
              <th className="px-6 py-4 text-left text-[#333]">Статус</th>
              <th className="px-6 py-4 text-left text-[#333]">Модуль</th>
              <th className="px-6 py-4 text-left text-[#333]">Приоритет</th>
              <th className="px-6 py-4 text-left text-[#333]">Время</th>
              <th className="px-6 py-4 text-left text-[#333]">Действия</th>
            </tr>
          </thead>
          <tbody>
            {recentTickets.map((ticket, index) => (
              <tr
                key={ticket.id}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#F9FCFB]'
                } hover:bg-[#E8F4F0] transition-colors`}
              >
                <td className="px-6 py-4 text-[#333]">#{ticket.id}</td>
                <td className="px-6 py-4 text-[#333]">{ticket.client}</td>
                <td className="px-6 py-4 text-[#333]">{ticket.status}</td>
                <td className="px-6 py-4 text-[#333]">{ticket.module}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs ${
                      ticket.priority === 'Высокий'
                        ? 'bg-red-100 text-red-700'
                        : ticket.priority === 'Средний'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-[#333]">{ticket.date}</td>
                <td className="px-6 py-4">
                  <Link to={`/customer/ticket/${ticket.id}`}>
                    <button className="px-4 py-1 bg-[#2ecc71] text-white hover:bg-[#27ae60] transition-colors">
                      Открыть
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Пагинация */}
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="text-sm text-[#333]">
          Показано 5 последних тикетов
        </div>
        <Link to="/support/all-tickets">
          <button className="px-6 py-2 bg-[#2ecc71] text-white hover:bg-[#27ae60] transition-colors">
            Показать все тикеты
          </button>
        </Link>
      </div>
    </div>
  );
}
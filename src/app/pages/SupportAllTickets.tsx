import { Link } from "react-router";
import { Search, RefreshCw, ChevronLeft, ChevronRight, Filter } from "lucide-react";

const tickets = [
  { id: '001', client: 'ivan@mail.ru', status: '🔴 Новый', date: '15.03 10:30', manager: 'Не назначен', closedDate: '-', module: 'ECULite Pro', priority: 'Высокий' },
  { id: '002', client: 'petr@yandex.ru', status: '🟡 В работе', date: '16.03 14:15', manager: 'Петров', closedDate: '-', module: 'TruckPower', priority: 'Средний' },
  { id: '003', client: 'sergey@gmail.com', status: '🟢 Закрыт', date: '10.03 09:00', manager: 'Сидоров', closedDate: '12.03 16:30', module: 'ECULite Pro', priority: 'Низкий' },
  { id: '004', client: 'alex@inbox.ru', status: '🟡 В работе', date: '14.03 11:20', manager: 'Иванов', closedDate: '-', module: 'MaxEngine', priority: 'Высокий' },
  { id: '005', client: 'dmitry@mail.ru', status: '🟢 Закрыт', date: '08.03 13:45', manager: 'Петров', closedDate: '09.03 10:15', module: 'TruckPower', priority: 'Средний' },
  { id: '006', client: 'ivan@mail.ru', status: '🔴 Новый', date: '17.03 09:15', manager: 'Не назначен', closedDate: '-', module: 'DieselBoost', priority: 'Средний' },
  { id: '007', client: 'nikolai@yandex.ru', status: '🟡 В работе', date: '16.03 16:00', manager: 'Иванов', closedDate: '-', module: 'ECULite Pro', priority: 'Низкий' },
  { id: '008', client: 'petr@yandex.ru', status: '🔴 Новый', date: '17.03 10:45', manager: 'Не назначен', closedDate: '-', module: 'EuroSmart', priority: 'Высокий' },
];

export function SupportAllTickets() {
  return (
    <div>
      {/* Заголовок */}
      <div className="bg-white p-6">
        <h1 className="text-3xl text-[#333]">Все тикеты</h1>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-4 gap-0">
        <div className="bg-white p-4">
          <div className="text-2xl text-[#333] mb-1">127</div>
          <div className="text-sm text-gray-600">Всего тикетов</div>
        </div>
        <div className="bg-white p-4">
          <div className="text-2xl text-red-600 mb-1">12</div>
          <div className="text-sm text-gray-600">Новых</div>
        </div>
        <div className="bg-white p-4">
          <div className="text-2xl text-orange-600 mb-1">45</div>
          <div className="text-sm text-gray-600">В работе</div>
        </div>
        <div className="bg-white p-4">
          <div className="text-2xl text-green-600 mb-1">70</div>
          <div className="text-sm text-gray-600">Закрыто сегодня</div>
        </div>
      </div>

      {/* Панель управления */}
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Поиск по клиенту, модулю, ID..."
              className="pl-10 pr-4 py-2 bg-[#F5F5F5] text-[#333] w-96 focus:outline-none focus:bg-white"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#D4E8E0] text-[#333] hover:bg-[#A8D5BA] transition-colors">
            <Filter size={18} />
            Фильтры
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#2ecc71] text-white hover:bg-[#27ae60] transition-colors">
          <RefreshCw size={18} />
          Обновить
        </button>
      </div>

      {/* Таблица */}
      <div className="bg-white">
        <table className="w-full">
          <thead>
            <tr className="bg-[#D4E8E0] text-[#333]">
              <th className="px-4 py-4 text-left">ID</th>
              <th className="px-4 py-4 text-left">Клиент</th>
              <th className="px-4 py-4 text-left">Статус</th>
              <th className="px-4 py-4 text-left">Модуль</th>
              <th className="px-4 py-4 text-left">Приоритет</th>
              <th className="px-4 py-4 text-left">Дата создания</th>
              <th className="px-4 py-4 text-left">Менеджер</th>
              <th className="px-4 py-4 text-left">Дата закрытия</th>
              <th className="px-4 py-4 text-left">Действия</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr
                key={ticket.id}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#F9FCFB]'
                } hover:bg-[#E8F4F0] transition-colors`}
              >
                <td className="px-4 py-3 text-[#333]">#{ticket.id}</td>
                <td className="px-4 py-3 text-[#333]">{ticket.client}</td>
                <td className="px-4 py-3 text-[#333]">{ticket.status}</td>
                <td className="px-4 py-3 text-[#333]">{ticket.module}</td>
                <td className="px-4 py-3">
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
                <td className="px-4 py-3 text-[#333]">{ticket.date}</td>
                <td className="px-4 py-3 text-[#333]">{ticket.manager}</td>
                <td className="px-4 py-3 text-[#333]">{ticket.closedDate}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Link to={`/customer/ticket/${ticket.id}`}>
                      <button className="px-3 py-1 bg-[#2ecc71] text-white hover:bg-[#27ae60] transition-colors text-sm">
                        Открыть
                      </button>
                    </Link>
                    {ticket.status === '🔴 Новый' && (
                      <button className="px-3 py-1 bg-[#D4E8E0] text-[#333] hover:bg-[#A8D5BA] transition-colors text-sm">
                        Взять
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Пагинация */}
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="text-sm text-[#333]">
          Показано 8 из 127 тикетов
        </div>
        <div className="flex items-center gap-0">
          <button className="p-2 bg-[#D4E8E0] hover:bg-[#A8D5BA] transition-colors">
            <ChevronLeft size={20} className="text-[#333]" />
          </button>
          <button className="px-4 py-2 bg-[#2ecc71] text-white">1</button>
          <button className="px-4 py-2 bg-white hover:bg-[#D4E8E0] text-[#333] transition-colors">2</button>
          <button className="px-4 py-2 bg-white hover:bg-[#D4E8E0] text-[#333] transition-colors">3</button>
          <button className="px-4 py-2 bg-white hover:bg-[#D4E8E0] text-[#333] transition-colors">...</button>
          <button className="px-4 py-2 bg-white hover:bg-[#D4E8E0] text-[#333] transition-colors">16</button>
          <button className="p-2 bg-[#D4E8E0] hover:bg-[#A8D5BA] transition-colors">
            <ChevronRight size={20} className="text-[#333]" />
          </button>
        </div>
      </div>
    </div>
  );
}
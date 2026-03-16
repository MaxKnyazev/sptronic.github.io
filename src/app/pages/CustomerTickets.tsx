import { Link } from "react-router";
import { Search, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";

const tickets = [
  { id: '001', status: '🔴 Новый', date: '15.03 10:30', manager: 'Иванов', closedDate: '-', module: 'ECULite Pro' },
  { id: '002', status: '🟡 В работе', date: '16.03 14:15', manager: 'Петров', closedDate: '-', module: 'TruckPower' },
  { id: '003', status: '🟢 Закрыт', date: '10.03 09:00', manager: 'Сидоров', closedDate: '12.03 16:30', module: 'ECULite Pro' },
  { id: '004', status: '🟡 В работе', date: '14.03 11:20', manager: 'Иванов', closedDate: '-', module: 'MaxEngine' },
  { id: '005', status: '🟢 Закрыт', date: '08.03 13:45', manager: 'Петров', closedDate: '09.03 10:15', module: 'TruckPower' },
];

export function CustomerTickets() {
  return (
    <div>
      {/* Заголовок */}
      <div className="bg-white p-6 bg-[#e8f4f0]">
        <h1 className="text-3xl text-[#333]">Мои обращения</h1>
      </div>

      {/* Панель управления */}
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Поиск по тикетам..."
              className="pl-10 pr-4 py-2 bg-[#F5F5F5] text-[#333] w-80 focus:outline-none focus:bg-white"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2ecc71] text-white hover:bg-[#27ae60] transition-colors">
            <RefreshCw size={18} />
            Обновить
          </button>
        </div>
      </div>

      {/* Таблица */}
      <div className="bg-white">
        <table className="w-full">
          <thead>
            <tr className="bg-[#D4E8E0] text-[#333]">
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">Статус</th>
              <th className="px-6 py-4 text-left">Модуль</th>
              <th className="px-6 py-4 text-left">Дата создания</th>
              <th className="px-6 py-4 text-left">Менеджер</th>
              <th className="px-6 py-4 text-left">Дата закрытия</th>
              <th className="px-6 py-4 text-left">Действия</th>
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
                <td className="px-6 py-4 text-[#333]">#{ticket.id}</td>
                <td className="px-6 py-4 text-[#333]">
                  <div className="flex items-center gap-2">
                    <span 
                      className={`w-3 h-3 rounded-full ${
                        ticket.status.includes('🔴') || ticket.status.includes('Новый') 
                          ? 'bg-red-500' 
                          : ticket.status.includes('🟢') || ticket.status.includes('Закрыт')
                          ? 'bg-green-500'
                          : 'bg-yellow-500'
                      }`}
                    />
                    {ticket.status.replace(/[🔴🟢🟡]/g, '').trim()}
                  </div>
                </td>
                <td className="px-6 py-4 text-[#333]">{ticket.module}</td>
                <td className="px-6 py-4 text-[#333]">{ticket.date}</td>
                <td className="px-6 py-4 text-[#333]">{ticket.manager}</td>
                <td className="px-6 py-4 text-[#333]">{ticket.closedDate}</td>
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
          Показано 5 из 15 тикетов
        </div>
        <div className="flex items-center gap-0">
          <button className="bg-[#D4E8E0] hover:bg-[#A8D5BA] transition-colors flex items-center justify-center px-[16px] py-[8px]">
            <ChevronLeft size={20} className="text-[#333]" />
          </button>
          <button className="px-4 py-2 bg-[#2ecc71] text-white">1</button>
          <button className="px-4 py-2 bg-white hover:bg-[#D4E8E0] text-[#333] transition-colors">2</button>
          <button className="px-4 py-2 bg-white hover:bg-[#D4E8E0] text-[#333] transition-colors">3</button>
          <button className="px-4 py-2 bg-[#D4E8E0] hover:bg-[#A8D5BA] transition-colors flex items-center justify-center">
            <ChevronRight size={20} className="text-[#333]" />
          </button>
        </div>
      </div>
    </div>
  );
}
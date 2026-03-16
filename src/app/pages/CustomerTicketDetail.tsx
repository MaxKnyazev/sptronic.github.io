import { useParams, Link } from "react-router";
import { ArrowLeft, Send, Download, Trash2, Paperclip } from "lucide-react";

const chatMessages = [
  { id: 1, sender: 'Менеджер', name: 'Иванов А.', text: 'Здравствуйте! Мы получили ваше обращение. Пожалуйста, отправьте логи системы.', time: '15.03 10:45', isManager: true },
  { id: 2, sender: 'Клиент', name: 'Вы', text: 'Добрый день! Прикрепляю файл с логами. Проблема возникает при попытке калибровки двигателя.', time: '15.03 11:20', isManager: false },
  { id: 3, sender: 'Менеджер', name: 'Иванов А.', text: 'Спасибо! Изучаем логи. В течение 2 часов дадим обратную связь.', time: '15.03 11:25', isManager: true },
  { id: 4, sender: 'Клиент', name: 'Вы', text: 'Хорошо, жду ответа.', time: '15.03 11:30', isManager: false },
];

const attachedFiles = [
  { name: 'ecu_log.txt', size: '2.1 MB', date: '15.03 11:20' },
  { name: 'diagnostic_report.pdf', size: '856 KB', date: '15.03 11:22' },
];

export function CustomerTicketDetail() {
  const { id } = useParams();

  return (
    <div>
      {/* Навигация назад */}
      <div className="bg-white p-4">
        <Link to="/customer/tickets">
          <button className="flex items-center gap-2 text-[#2ecc71] hover:text-[#27ae60] transition-colors">
            <ArrowLeft size={20} />
            <span>Назад к обращениям</span>
          </button>
        </Link>
      </div>

      {/* Шапка тикета */}
      <div className="bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl text-[#333]">Тикет #{id}</h1>
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 bg-[#2ecc71] text-white">🟡 В работе</span>
            <span className="text-sm text-gray-600">Создан: 15.03.2026 10:30</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Модуль:</span>
            <span className="ml-2 text-[#333]">ECULite Pro</span>
          </div>
          <div>
            <span className="text-gray-600">Менеджер:</span>
            <span className="ml-2 text-[#333]">Иванов А.</span>
          </div>
        </div>
      </div>

      {/* Описание проблемы */}
      <div className="bg-white p-6">
        <h2 className="text-lg text-[#333] mb-3">Описание проблемы</h2>
        <p className="text-[#333] leading-relaxed">
          Не могу выполнить калибровку двигателя MAN TGX 2020. После загрузки прошивки система выдает ошибку "ECU Communication Failed". Пробовал перезагрузить устройство, проблема сохраняется. Требуется срочная помощь.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-0">
        {/* Чат */}
        <div className="col-span-2 bg-white">
          <div className="bg-[#D4E8E0] px-6 py-4">
            <h2 className="text-lg text-[#333]">Чат с поддержкой</h2>
          </div>
          
          {/* Сообщения */}
          <div 
            className="p-6 space-y-4 h-96 overflow-y-auto bg-[#F9FCFB] [scrollbar-width:thin] [scrollbar-color:#2ecc71_#E8F4F0]"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#2ecc71 #E8F4F0'
            }}
          >
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isManager ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-md ${
                    msg.isManager
                      ? 'bg-white'
                      : 'bg-[#2ecc71] text-white'
                  } p-4`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm ${msg.isManager ? 'text-[#333]' : 'text-white'}`}>{msg.name}</span>
                    <span className={`text-xs ${msg.isManager ? 'text-gray-500' : 'text-green-100'}`}>{msg.time}</span>
                  </div>
                  <p className={msg.isManager ? 'text-[#333]' : 'text-white'}>{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Поле ввода */}
          <div className="p-4 bg-white">
            <div className="flex gap-2">
              <button className="p-3 bg-[#D4E8E0] hover:bg-[#A8D5BA] transition-colors">
                <Paperclip size={20} className="text-[#333]" />
              </button>
              <input
                type="text"
                placeholder="Введите сообщение..."
                className="flex-1 px-4 py-2 bg-[#F5F5F5] text-[#333] focus:outline-none focus:bg-white"
              />
              <button className="px-6 py-2 bg-[#2ecc71] text-white hover:bg-[#27ae60] transition-colors flex items-center gap-2">
                <Send size={18} />
                Отправить
              </button>
            </div>
          </div>
        </div>

        {/* Боковая панель с файлами */}
        <div className="space-y-0">
          {/* Прикрепленные файлы */}
          <div className="bg-white">
            <div className="bg-[#D4E8E0] px-4 py-3">
              <h3 className="text-[#333]">Прикрепленные файлы</h3>
            </div>
            <div className="p-4 space-y-3">
              {attachedFiles.map((file, index) => (
                <div key={index} className="bg-[#F9FCFB] p-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="text-sm text-[#333] mb-1">{file.name}</div>
                      <div className="text-xs text-gray-500">{file.size} • {file.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-1 bg-[#2ecc71] text-white hover:bg-[#27ae60] transition-colors text-sm flex items-center justify-center gap-1">
                      <Download size={14} />
                      Скачать
                    </button>
                    <button className="px-3 py-1 bg-red-100 text-red-600 hover:bg-red-200 transition-colors text-sm">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Действия */}
          <div className="bg-white p-4 space-y-2">
            <h3 className="text-[#333] mb-3">Действия</h3>
            <button className="w-full px-4 py-2 bg-[#2ecc71] text-white hover:bg-[#27ae60] transition-colors">
              Добавить файл
            </button>
            <button className="w-full px-4 py-2 bg-red-500 text-white hover:bg-red-600 transition-colors">
              Отменить тикет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
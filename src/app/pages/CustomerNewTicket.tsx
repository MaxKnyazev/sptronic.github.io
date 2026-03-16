import { useState } from "react";
import { ArrowLeft, Upload, X } from "lucide-react";
import { Link } from "react-router";

export function CustomerNewTicket() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles((prev) => [...prev, ...files]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

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

      {/* Заголовок */}
      <div className="bg-white p-6">
        <h1 className="text-3xl text-[#333]">Новое обращение</h1>
      </div>

      {/* Форма */}
      <div className="bg-white p-8">
        <form className="space-y-6">
          {/* Модуль */}
          <div>
            <label htmlFor="module" className="block text-[#333] mb-2">
              Модуль *
            </label>
            <select
              id="module"
              className="w-full px-4 py-3 bg-[#F5F5F5] text-[#333] focus:outline-none focus:bg-white"
            >
              <option value="">Выберите модуль</option>
              <option value="eculite">ECULite Pro</option>
              <option value="truckpower">TruckPower</option>
              <option value="maxengine">MaxEngine</option>
              <option value="dieselboost">DieselBoost</option>
              <option value="eurosmart">EuroSmart</option>
              <option value="notInList">Нет в списке</option>
            </select>
          </div>

          {/* Тема */}
          <div>
            <label htmlFor="subject" className="block text-[#333] mb-2">
              Тема обращения *
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Кратко опишите проблему"
              className="w-full px-4 py-3 bg-[#F5F5F5] text-[#333] focus:outline-none focus:bg-white"
            />
          </div>

          {/* Описание */}
          <div>
            <label htmlFor="description" className="block text-[#333] mb-2">
              Подробное описание *
            </label>
            <textarea
              id="description"
              rows={8}
              placeholder="Опишите проблему подробно: что произошло, какие действия выполнялись, какие ошибки появились..."
              className="w-full px-4 py-3 bg-[#F5F5F5] text-[#333] focus:outline-none focus:bg-white resize-none"
            />
          </div>

          {/* Drag & Drop файлы */}
          <div>
            <label className="block text-[#333] mb-2">
              Прикрепленные файлы
            </label>
            
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative ${
                isDragging ? 'bg-[#E8F4F0]' : 'bg-[#F5F5F5]'
              } transition-colors`}
            >
              <input
                type="file"
                multiple
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center py-12 px-4">
                <Upload size={48} className="text-[#2ecc71] mb-4" />
                <p className="text-[#333] mb-2">
                  Перетащите файлы сюда или нажмите для выбора
                </p>
                <p className="text-sm text-gray-500">
                  Поддерживаются: .txt, .log, .pdf, .zip (макс. 50MB)
                </p>
              </div>
            </div>

            {/* Список выбранных файлов */}
            {selectedFiles.length > 0 && (
              <div className="mt-4 space-y-0">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-[#F9FCFB]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#2ecc71]">
                        <Upload size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-[#333]">{file.name}</div>
                        <div className="text-xs text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="p-2 hover:bg-red-50 transition-colors"
                    >
                      <X size={18} className="text-red-600" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Приоритет */}
          <div>
            <label className="block text-[#333] mb-2">
              Приоритет
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="priority"
                  value="low"
                  defaultChecked
                  className="w-4 h-4"
                />
                <span className="text-[#333]">Низкий</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="priority"
                  value="medium"
                  className="w-4 h-4"
                />
                <span className="text-[#333]">Средний</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="priority"
                  value="high"
                  className="w-4 h-4"
                />
                <span className="text-[#333]">Высокий</span>
              </label>
            </div>
          </div>

          {/* Кнопки */}
          <div className="flex gap-0 pt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-[#2ecc71] text-white hover:bg-[#27ae60] transition-colors"
            >
              Создать тикет
            </button>
            <Link to="/customer/tickets">
              <button
                type="button"
                className="px-8 py-3 bg-[#D4E8E0] text-[#333] hover:bg-[#A8D5BA] transition-colors"
              >
                Отмена
              </button>
            </Link>
          </div>
        </form>
      </div>

      {/* Подсказка */}
      <div className="bg-[#D4E8E0] p-4">
        <h3 className="text-[#333] mb-2">💡 Советы для быстрого решения:</h3>
        <ul className="text-sm text-[#333] space-y-1 list-disc list-inside">
          <li>Опишите проблему максимально подробно</li>
          <li>Приложите файлы логов и скриншоты ошибок</li>
          <li>Укажите модель автомобиля и версию прошивки</li>
          <li>Опишите шаги для воспроизведения проблемы</li>
        </ul>
      </div>
    </div>
  );
}
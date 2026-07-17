import { useState } from 'react';
import { 
  House, 
  Building2,
  GraduationCap,
  Users, 
  BookOpen,
  ShieldCheck,
  Handshake,
  Mail,
  LogOut, 
  Search, 
  Bell,
  ChevronRight,
  Edit3,
  Eye,
  Plus,
  FileText,
  LayoutDashboard
} from 'lucide-react';
import logoUtom from '../../imports/logo-utom.png';
import { adminNavigationCategories } from '../data/navigation';

const sectionIcons = {
  inicio: House,
  conocenos: Building2,
  estudiantes: GraduationCap,
  docentes: Users,
  oferta: BookOpen,
  transparencia: ShieldCheck,
  servicios: Handshake,
  contacto: Mail,
} as const;

const sections = adminNavigationCategories.map((category) => ({
  ...category,
  icon: sectionIcons[category.id],
}));

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('inicio');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0F5132] dark:bg-gray-900 text-white flex flex-col transition-colors duration-300">
        <div className="p-8">
          <img src={logoUtom} alt="UTOM" className="h-10 w-auto brightness-0 invert" />
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60 mt-4">Gestor de Contenido</p>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === section.id 
                ? 'bg-white/10 text-white shadow-sm' 
                : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <section.icon className={`w-5 h-5 ${activeTab === section.id ? 'text-[#D4A574]' : ''}`} />
              <span className="font-medium text-sm">{section.name}</span>
              {activeTab === section.id && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10">
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-10 transition-colors duration-300">
          <div className="flex items-center gap-4 text-gray-400">
            <span className="text-sm font-medium">Dashboard</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {sections.find(s => s.id === activeTab)?.name}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar contenido..." 
                className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-[#0F5132] outline-none w-64 dark:text-white transition-all"
              />
            </div>
            <button className="relative p-2 text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574] transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-[#D4A574] flex items-center justify-center font-bold text-[#0F5132]">
              AD
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Editor de {sections.find(s => s.id === activeTab)?.name}</h2>
              <p className="text-gray-500 dark:text-gray-400">Modifica el contenido visual y textual de esta sección.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl font-bold text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm">
                <Eye className="w-4 h-4" />
                Vista Previa
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#0F5132] dark:bg-[#D4A574] rounded-xl font-bold text-sm text-white dark:text-[#0F5132] hover:shadow-lg transition-all">
                Guardar Cambios
              </button>
            </div>
          </div>

          {/* Editor Placeholder Cards */}
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50 dark:border-gray-800">
                <h4 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#D4A574]" />
                  Contenido de Texto
                </h4>
                <button className="text-[#0F5132] dark:text-[#D4A574] text-xs font-bold hover:underline">Restaurar Original</button>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Título Principal</label>
                  <input 
                    type="text" 
                    defaultValue="Educación que une, transforma y trasciende"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#0F5132] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Descripción / Subtítulo</label>
                  <textarea 
                    rows={4}
                    defaultValue="Formamos profesionales de excelencia comprometidos con el desarrollo tecnológico, gastronómico, biotecnológico y empresarial de Michoacán y México."
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#0F5132] transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50 dark:border-gray-800">
                <h4 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
                  <LayoutDashboard className="w-5 h-5 text-[#D4A574]" />
                  Elementos Visuales
                </h4>
                <button className="text-[#0F5132] dark:text-[#D4A574] text-xs font-bold flex items-center gap-1 hover:underline">
                  <Plus className="w-4 h-4" /> Agregar Imagen
                </button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative group rounded-2xl overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800 border-2 border-transparent hover:border-[#D4A574] transition-all">
                    <img 
                      src={`https://images.unsplash.com/photo-1723987135977-ae935608939e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300&index=${i}`}
                      className="w-full h-full object-cover"
                      alt="Thumbnail"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity">
                      <button className="p-2 bg-white rounded-lg text-[#0F5132] hover:scale-110 transition-transform"><Edit3 className="w-4 h-4" /></button>
                      <button className="p-2 bg-white rounded-lg text-red-500 hover:scale-110 transition-transform"><LogOut className="w-4 h-4 rotate-90" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

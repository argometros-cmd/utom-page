import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Lock, User, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { utomBrandMarkUrl } from '../constants/branding';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Bypass validation for now and redirect to admin panel
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="max-w-md w-full">
        {/* Logo y Título */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-white dark:bg-gray-900 rounded-3xl shadow-xl mb-4 transition-colors duration-300">
            <img src={utomBrandMarkUrl} alt="UTOM" className="h-16 w-auto object-contain" />
          </div>
          <h1 className="font-['Montserrat'] font-bold text-2xl text-[#0F5132] dark:text-[#D4A574]">
            Panel de Administración
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Ingrese sus credenciales para acceder al sistema
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">
                Usuario o Correo
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#0F5132] dark:group-focus-within:text-[#D4A574] transition-colors" />
                </div>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-[#0F5132] dark:focus:border-[#D4A574] rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all"
                  placeholder="admin@utom.edu.mx"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">
                Contraseña
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#0F5132] dark:group-focus-within:text-[#D4A574] transition-colors" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-12 py-3.5 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-[#0F5132] dark:focus:border-[#D4A574] rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#0F5132] focus:ring-[#0F5132] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500 dark:text-gray-400">
                  Recordarme
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-[#0F5132] dark:text-[#D4A574] hover:underline">
                  ¿Olvidó su contraseña?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F5132] dark:bg-[#D4A574] text-white dark:text-[#0F5132] font-bold py-4 rounded-2xl hover:bg-[#0d4228] dark:hover:bg-[#c19563] transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>

        {/* Footer del Login */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-[#0F5132] dark:hover:text-[#D4A574] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al sitio público
          </a>
        </div>
      </div>
    </div>
  );
}

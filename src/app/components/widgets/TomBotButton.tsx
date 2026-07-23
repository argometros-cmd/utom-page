import tomBotImg from '../../../imports/TomBot/TOM_bot.png';

interface TomBotButtonProps {
  variant?: 'floating' | 'inline';
  className?: string;
  onClick?: () => void;
}

export function TomBotButton({
  variant = 'floating',
  className = '',
  onClick,
}: TomBotButtonProps) {
  const handleClick = onClick ?? (() => console.log('TomBot clicked'));

  if (variant === 'inline') {
    return (
      <button
        type="button"
        className={`w-full flex items-center gap-3 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 text-left shadow-sm transition-all hover:border-[#0F5132] hover:shadow-md dark:hover:border-[#D4A574] ${className}`}
        aria-label="Hablar con TomBot"
        onClick={handleClick}
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm">
          <img
            src={tomBotImg}
            alt="TomBot"
            className="h-full w-full object-cover"
          />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-gray-900 dark:text-white">
            TomBot
          </span>
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            Abre el asistente virtual
          </span>
        </span>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-44 left-8 z-[100] hidden lg:block group ${className}`}>
      <button
        className="w-16 h-16 rounded-full shadow-2xl overflow-hidden border-0 transition-all duration-300 hover:scale-110 active:scale-95 bg-white flex items-center justify-center"
        aria-label="Hablar con TomBot"
        onClick={handleClick}
      >
        <img
          src={tomBotImg}
          alt="TomBot"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </button>

      {/* Tooltip hint */}
      <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-[#0F5132] dark:bg-[#D4A574] text-white dark:text-[#0F5132] px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 -translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-lg">
        ¡Hola! Soy TomBot
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-[#0F5132] dark:bg-[#D4A574] rotate-45" />
      </div>
    </div>
  );
}

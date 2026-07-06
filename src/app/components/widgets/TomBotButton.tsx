import tomBotImg from '../../../imports/TomBot/TOM_bot.png';

export function TomBotButton() {
  return (
    <div className="fixed bottom-44 left-8 z-[100] group">
      <button
        className="w-16 h-16 rounded-full shadow-2xl overflow-hidden border-0 transition-all duration-300 hover:scale-110 active:scale-95 bg-white flex items-center justify-center"
        aria-label="Hablar con TomBot"
        onClick={() => console.log('TomBot clicked')}
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


import React, { useState, useMemo } from 'react';
import { acupunctureService } from '../services/acupunctureService.ts';
import type { AcupuncturePoint } from '../data/acupuncturePoints.ts';
import { Logo, StethoscopeIcon, MapPinIcon, CheckCircleIcon, SparklesIcon, ChevronLeftIcon } from '../components/Icons.tsx';
import { Link } from 'react-router-dom';

const AcupunctureAtlas: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMeridian, setSelectedMeridian] = useState('all');
    const [selectedPoint, setSelectedPoint] = useState<AcupuncturePoint | null>(null);

    const meridians = useMemo(() => acupunctureService.getMeridians(), []);
    
    const filteredPoints = useMemo(() => {
        return acupunctureService.searchPoints(searchTerm, selectedMeridian);
    }, [searchTerm, selectedMeridian]);

    const handleSelectPoint = (point: AcupuncturePoint) => {
        setSelectedPoint(point);
    };

    const handleClearSelection = () => {
        setSelectedPoint(null);
    }

    return (
         <div className="min-h-screen bg-bg-alt dark:bg-bg-dark text-text-main dark:text-light">
            <header className="bg-primary text-white shadow-md p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Logo className="h-10 w-auto" />
                    <h1 className="text-xl font-bold">Atlas de Acupuntura</h1>
                </div>
                <Link to="/login" className="text-sm font-semibold bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg transition-colors flex items-center gap-1">
                    <ChevronLeftIcon className="w-4 h-4" /> Volver al Portal
                </Link>
            </header>
            
            <main className="container mx-auto p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Panel de Búsqueda y Lista */}
                    <aside className="md:col-span-1 bg-bg-main dark:bg-surface-dark p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-main dark:text-main mb-4">Explorar Puntos</h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Buscar por nombre, síntoma..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 border border-border-main dark:border-border-dark rounded-lg focus:ring-2 focus:ring-primary-light focus:outline-none bg-bg-main dark:bg-bg-dark"
                            />
                            <select
                                value={selectedMeridian}
                                onChange={(e) => setSelectedMeridian(e.target.value)}
                                className="w-full px-4 py-2 border border-border-main dark:border-border-dark rounded-lg focus:ring-2 focus:ring-primary-light focus:outline-none appearance-none bg-bg-main dark:bg-bg-dark"
                            >
                                <option value="all">Todos los Meridianos</option>
                                {meridians.map(meridian => (
                                    <option key={meridian} value={meridian}>{meridian}</option>
                                ))}
                            </select>
                        </div>

                        <ul className="mt-6 max-h-[60vh] overflow-y-auto pr-2">
                            {filteredPoints.map(point => (
                                <li key={point.id}>
                                    <button 
                                        onClick={() => handleSelectPoint(point)}
                                        className={`w-full text-left p-3 my-1 rounded-lg transition-colors duration-200 ${selectedPoint?.id === point.id ? 'bg-accent-warm text-primary font-semibold' : 'hover:bg-accent-warm/30 dark:hover:bg-primary/10'}`}
                                    >
                                        <p className="font-bold">{point.id} - {point.name}</p>
                                        <p className="text-xs text-muted dark:text-main/80">{point.meridian}</p>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Panel de Detalles */}
                    <div className="md:col-span-2">
                        {selectedPoint ? (
                            <div className="bg-bg-main dark:bg-surface-dark p-6 rounded-lg shadow-md animate-fade-in">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-3xl font-bold text-primary dark:text-primary">{selectedPoint.id} - {selectedPoint.name}</h2>
                                        <p className="font-semibold text-accent-turquoise dark:text-accent-turquoise mb-4">{selectedPoint.meridian}</p>
                                    </div>
                                    <button onClick={handleClearSelection} className="text-sm text-muted dark:text-muted hover:text-main dark:hover:text-main">Cerrar</button>
                                </div>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-main dark:text-main"><MapPinIcon className="w-5 h-5"/> Localización</h3>
                                        <p className="text-muted dark:text-main/80">{selectedPoint.location}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-main dark:text-main"><CheckCircleIcon className="w-5 h-5"/> Indicaciones</h3>
                                        <ul className="list-disc list-inside space-y-1 text-muted dark:text-main/80">
                                            {selectedPoint.indications.map((ind, i) => <li key={i}>{ind}</li>)}
                                        </ul>
                                    </div>
                                     <div>
                                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-main dark:text-main"><SparklesIcon className="w-5 h-5"/> Funciones</h3>
                                        <ul className="list-disc list-inside space-y-1 text-muted dark:text-main/80">
                                            {selectedPoint.functions.map((fn, i) => <li key={i}>{fn}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col justify-center items-center h-full bg-bg-main dark:bg-surface-dark p-6 rounded-lg shadow-md text-center">
                                <StethoscopeIcon className="w-24 h-24 text-muted dark:text-muted mb-4"/>
                                <h2 className="text-2xl font-bold text-main dark:text-main">Bienvenido al Atlas de Acupuntura</h2>
                                <p className="text-muted dark:text-main/80 mt-2 max-w-sm">Use el panel de la izquierda para buscar puntos por nombre, meridiano o síntoma. Seleccione un punto para ver sus detalles aquí.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AcupunctureAtlas;

const styleId = 'atlas-animation-styles';
if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    .animate-fade-in {
        animation: fade-in 0.5s ease-in-out forwards;
    }
    `;
    document.head.appendChild(style);
}

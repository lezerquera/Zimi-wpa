
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
                                        className={`w-full text-left p
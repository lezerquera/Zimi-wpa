import { acupuncturePoints, AcupuncturePoint } from '../data/acupuncturePoints';

class AcupunctureService {
  private points: AcupuncturePoint[];

  constructor() {
    this.points = acupuncturePoints;
  }

  getAllPoints(): AcupuncturePoint[] {
    return this.points;
  }

  getPointById(id: string): AcupuncturePoint | undefined {
    return this.points.find(p => p.id === id);
  }

  getMeridians(): string[] {
    const meridians = this.points.map(p => p.meridian);
    return [...new Set(meridians)].sort();
  }

  searchPoints(query: string, meridianFilter: string = 'all'): AcupuncturePoint[] {
    const lowerCaseQuery = query.toLowerCase();
    
    return this.points.filter(point => {
      const matchesMeridian = meridianFilter === 'all' || point.meridian === meridianFilter;
      
      const matchesQuery = 
        point.id.toLowerCase().includes(lowerCaseQuery) ||
        point.name.toLowerCase().includes(lowerCaseQuery) ||
        point.indications.some(ind => ind.toLowerCase().includes(lowerCaseQuery)) ||
        point.functions.some(fn => fn.toLowerCase().includes(lowerCaseQuery));

      return matchesMeridian && matchesQuery;
    });
  }
}

// Export a singleton instance
export const acupunctureService = new AcupunctureService();

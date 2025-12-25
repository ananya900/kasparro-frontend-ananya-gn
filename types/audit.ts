export interface AuditModule {
  id: string;
  title: string;
  score: number;
  insights: string[];
  issues: string[];
  recommendations: string[];
}

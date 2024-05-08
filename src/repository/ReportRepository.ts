import { ReportRepositorySequelize } from "./dependencies/ReportRepositorySequelize";

export class ReportRepository {
    constructor(private db: any) {} 
    public async findOpenReportsByCity(cityId: number): Promise<Report[]> {
        try {
            return this.db.Report.findAll({
                where: {
                    cityId: cityId,
                    status: 'open'  
                }
            });
        } catch (error) {
            throw new Error('Error fetching reports: ' + error.message);
        }
    export class ReportService {
    constructor(private reportRepository: ReportRepository) {}

    public async getOpenReportsByCity(cityId: number): Promise<Report[]> {
        return this.reportRepository.findOpenReportsByCity(cityId);
    }
}

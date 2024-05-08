import { ReportControllerExpress } from "./dependencies/ReportControllerExpress";

export class ReportController extends ReportControllerExpress {
    constructor(private reportService: ReportService) {
        super();
    }

    public getAllOpenReportsByCity = async (req: Request, res: Response): Promise<Response> => {
        try {
            const cityId = parseInt(req.params.cityId);
            const reports = await this.reportService.getOpenReportsByCity(cityId);
            return res.status(200).json(reports);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
      const router = express.Router();
const reportController = new ReportController();

router.get('/reports/city/:cityId/open', reportController.getAllOpenReportsByCity);

export default router;
    }
}

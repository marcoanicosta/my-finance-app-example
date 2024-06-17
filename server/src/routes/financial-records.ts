import express, {Request, Response, response} from "express";
import FinancialRecordModel from "../schema/financial-records";
import { log } from "console";

const router = express.Router();

router.get("/getAllByUserID/:userId", async (req: Request, res: Response) => { // Param :userId
    try {
            const userId = req.params.userId //get url param: userID
            const records = await FinancialRecordModel.find({userId: userId}) // find all records in model on matching id
            if (records.length === 0) {
                return res.status(404).send("No records found for the user");
        }
        res.status(200).send(records);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/", async (req: Request, res: Response) => { 
    try {
        const newRecordBody = req.body;
        const newRecord = new FinancialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();
        
        console.log("Record saved successfully:", savedRecord);
        res.status(200).send(savedRecord);
    } catch (error) {
        console.log("Error saving record:", error);
        res.status(500).send({ error: error });
    }


});

router.put("/:id", async (req: Request, res: Response) => { // Post record to middleware dec
    try {
        const id = req.params.id //get url param: userID
        const newRecordBody = req.body;
        const record = await FinancialRecordModel.findByIdAndUpdate(
            id,
            newRecordBody
        );

        if (!record) return res.status(404).send();
        
        res.status(200).send(record);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req: Request, res: Response) => { // Post record to middleware dec
    try {
        const id = req.params.id //get url param: userID
        const record = await FinancialRecordModel.findByIdAndDelete(id);
        if (!record) return res.status(404).send();
        res.status(200).send(record);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
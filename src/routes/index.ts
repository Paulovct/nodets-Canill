import { Router } from "express";
import * as pageControler from "../controlers/pageControler";
import * as searchControler from "../controlers/searchControler";

const router = Router();

router.get("/" , pageControler.home);
router.get("/dogs" , pageControler.dogs);
router.get("/cats" , pageControler.cats);
router.get("/fishes" , pageControler.fishes);

router.get("/search" , searchControler.search);

export default router;
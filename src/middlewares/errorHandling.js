
export function errorHandlingMiddleware(error, req, res, next) {

    console.error(error);
    
	if (error.type === "conflict") return res.sendStatus(409);
	if (error.type === "typeError") return res.sendStatus(422);
    if (error.type === "not found") return res.sendStatus(404);
    if (error.type === "unathorized") return res.sendStatus(401);
	
	return res.sendStatus(500);
}
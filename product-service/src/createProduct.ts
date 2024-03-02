import { ProductServiceInterface } from "./services/products";
import { winstonLogger } from "./utils/winstonLogger";
import { errorResponse, successResponse } from "./utils/apiResponseBuilder";

export const createProductHandler = async (event, _context) => {
    try {
        winstonLogger.logRequest(`Incoming event: ${JSON.stringify(event)}`);

        const productService = new ProductServiceInterface(); // Assuming ProductServiceInterface is a class
        const product = await productService.create(event.body);

        winstonLogger.logRequest(`Created product: ${JSON.stringify(product)}`);

        return successResponse(product);
    } 
    catch (err) {
        return errorResponse(err);
    }
}

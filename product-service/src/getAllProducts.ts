import { ProductServiceInterface } from "./services/products";
import { winstonLogger } from "./utils/winstonLogger";
import { errorResponse, successResponse } from "./utils/apiResponseBuilder";

/**
 * Handler function to get all products.
 * @param {ProductServiceInterface} productService - An instance of ProductServiceInterface.
 * @returns {Promise<Object>} - A promise that resolves to the API response.
 */
export const getAllProductsHandler = async (event, _context) => {
    try {
        // Log the incoming event
        winstonLogger.logRequest(`Incoming event: ${JSON.stringify(event)}`);

        // Assuming ProductServiceInterface is a class, instantiate it
        const productService = new ProductServiceInterface();

        // Get all products
        const products = await productService.getAllProducts();

        // Log the received products
        winstonLogger.logRequest(`Received products: ${JSON.stringify(products)}`);

        // Return success response with the products
        return successResponse(products);
    } catch (err) {
        // Return error response in case of an exception
        return errorResponse(err);
    }
}

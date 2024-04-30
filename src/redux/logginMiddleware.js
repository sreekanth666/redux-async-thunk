import { increment } from "./productSlice";

const loggingMiddleware = store => next => action => {
    console.log('Action:', action);
    console.log('Store:', store);
    
    // We need to write condition to prevent call stack overflow
    if (action.type === "fetch/products/pending") {
        // Dispatch the increment action
        store.dispatch(increment());
    };
    return next(action)
}

export default loggingMiddleware

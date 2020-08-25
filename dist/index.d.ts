import { Express } from 'express-serve-static-core';
/**
 * boot server
 * @param {Express} app - Express instance
 * @param {Function=} - debug function
 * @param {boolean=} security - if true, https will be used instead of http. Default value: false
 */
export declare const www: (app: Express, debug?: Function, security?: boolean) => Promise<unknown>;

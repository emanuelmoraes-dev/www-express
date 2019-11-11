import debug from 'debug';
import { Express } from 'express-serve-static-core';
declare const _default: (app: Express, debug: debug.Debugger, security?: boolean) => Promise<unknown>;
/**
 * boot server
 * @param {Express} app - Express instance
 * @param {debug.Debugger} - debug function
 * @param {boolean=} security - if true, https will be used instead of http. Default value: false
 */
export default _default;

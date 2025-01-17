import * as def from './default';
import * as interactive from './interactive';
import { Context } from './interface';
import * as run from './run';
import * as submit_answer from './submit_answer';

export = {
    default: def, interactive, run, submit_answer, objective: submit_answer,
} as Record<string, { judge(ctx: Context, startPromise?: Promise<any>): Promise<void> }>;

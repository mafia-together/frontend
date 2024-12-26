import { DOMAIN } from '../axios/instances';
import { Job } from '../type';

export const BORKER_URL = `wss://${DOMAIN}/api/stomp`;
export const CHAT_SUB = (auth: string | null) => `/sub/chat/${auth}`;
export const CHAT_PUB = (auth: string | null) => `/pub/chat/${auth}`;

export const JOB_SKILL_SUB = (auth: string | null, job: Job) =>
  `/sub/job/skill/${job?.toLocaleLowerCase()}/${auth}`;
export const JOB_SKILL_PUB = (auth: string | null) => `/pub/skill/${auth}`;

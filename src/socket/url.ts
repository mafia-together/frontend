import { DOMAIN } from '../axios/instances';
import { Job } from '../type';

// *연결*
export const BORKER_URL = `wss://${DOMAIN}/api/stomp`;

// *채팅*
// chat
export const CHAT_SUB = (auth: string | null) => `/sub/chat/${auth}`;
export const CHAT_PUB = (auth: string | null) => `/pub/chat/${auth}`;

// skill
export const JOB_SKILL_SUB = (code: string | null, job: Job) =>
  `/sub/jobs/skill/${job?.toLocaleLowerCase()}/${code}`;
export const JOB_SKILL_PUB = `/pub/jobs/skill`;

export type SpecialJob = 'MAFIA' | 'DOCTOR' | 'POLICE';
export type Job = SpecialJob | 'CITIZEN' | null;
export type Status =
  | 'WAIT'
  | 'DAY_INTRO'
  | 'NOTICE'
  | 'DAY'
  | 'VOTE'
  | 'VOTE_RESULT'
  | 'NIGHT_INTRO'
  | 'NIGHT'
  | 'END';
export type Color = 'day' | 'night' | 'dark' | 'light' | 'kill' | 'safe' | 'deadDay' | 'deadNight';
export type Dead = string | null;
export type ExcludeSpecialJob = 'MAFIA' | 'CITIZEN';

export interface RoomsStatus {
  statusType: Status;
}

export interface Chat {
  name: string;
  contents: string;
  timestamp: Date;
  isOwner: boolean;
  job: Job;
}

export interface ChatRequest {
  contents: string;
}

export interface RoomResponse {
  code: string;
}

export interface RoomRequest {
  total: number;
  mafia: number;
  doctor: number;
  police: number;
}

export interface ParticipateResponse {
  auth: string;
}

export interface ParticipateRequest {
  code: string;
  name: string;
}

export interface GameStatusRequest {
  status: Status;
}

export interface GameInfo {
  startTime: Date;
  endTime: Date;
  isAlive: boolean;
  totalPlayers: number;
  isMaster: boolean;
  myName: string;
  players: Player[];
}

export interface MyJobResponse {
  job: Job;
}

export interface Player {
  name: string;
  isAlive: boolean;
  job: Job | null;
}

export interface RoomCodeExistsResponse {
  exist: boolean;
}

export interface SkillRequest {
  target: string | null;
}

export interface SkillResponse {
  job: Job;
  result: Job;
}

export interface MafiaVoteResult {
  target: string;
}

export interface VoteRequest {
  target: string;
}

export interface DeadResult {
  dead: Dead;
}

export interface GamesResults {
  winnerJob: ExcludeSpecialJob;
  endTime: Date;
  winner: Player[];
  loser: Player[];
}

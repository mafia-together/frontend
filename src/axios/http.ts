import { useSuspenseQuery } from '@tanstack/react-query';

import {
  Chat,
  ChatRequest,
  DeadResult,
  GameInfo,
  GamesResults,
  MafiaVoteResult,
  MyJobResponse,
  ParticipateRequest,
  ParticipateResponse,
  RoomCodeExistsResponse,
  RoomResponse,
  RoomsStatus,
  SkillRequest,
  SkillResponse,
  VoteRequest,
} from '../type';
import { http } from './instances';

export const participateRooms = (payload: ParticipateRequest) => {
  return http.get<ParticipateResponse>(`/lobbies?code=${payload.code}&name=${payload.name}`);
};

export const createRoom = (payload: {
  total: number;
  mafia: number;
  doctor: number;
  police: number;
}) => {
  return http.post<RoomResponse>('/lobbies', payload);
};

export const getRoomsCode = () => {
  return http.get<RoomResponse>(`/lobbies/code`);
};

export const getValidRoomCode = async (code: string | null) => {
  return http.get<RoomCodeExistsResponse>(`/lobbies/code/exist?code=${code}`);
};

export const useChatsQuery = () => {
  const { data: chats, ...rest } = useSuspenseQuery({
    queryKey: ['chats', localStorage.getItem('auth')],
    queryFn: () => getChats(),
    refetchInterval: 500,
    staleTime: 500,
  });
  return {
    chats,
    ...rest,
  };
};

export const useGamesStatusQuery = () => {
  const { data: gamesStatus, ...rest } = useSuspenseQuery({
    queryKey: ['games', 'status', localStorage.getItem('auth')],
    queryFn: () => getRoomsStatus(),
    refetchInterval: 500,
    staleTime: 500,
  });

  return {
    roomsStatus: gamesStatus,
    ...rest,
  };
};

export const getRoomsStatus = () => {
  return http.get<RoomsStatus>('/games/status');
};

export const useGamesInfoQuery = () => {
  const { data: gameInfo, ...rest } = useSuspenseQuery({
    queryKey: ['games', 'info', localStorage.getItem('auth')],
    queryFn: () => getGamesInfo(),
    refetchInterval: 500,
    staleTime: 500,
  });
  return { gameInfo, ...rest };
};

export const getGamesInfo = () => {
  return http.get<GameInfo>(`/games/info`);
};

export const startGame = async () => {
  http.post(`/games/status`);
};

export const getRoomsResults = () => {
  return http.get<GamesResults>('/games/result');
};
export const getChats = () => {
  return http.get<Chat[]>(`/chat`);
};

export const postChats = (payload: ChatRequest) => {
  return http.post(`/chat`, payload);
};

export const getMyJob = () => {
  return http.get<MyJobResponse>('/jobs/my');
};

export const postSkill = async (payload: SkillRequest) => {
  return http.post<SkillResponse>(`/jobs/skill`, payload);
};

export const getMafiaVoteResult = async () => {
  return http.get<MafiaVoteResult>(`jobs/skill`);
};

export const useMafiaVoteResultQuery = () => {
  const { data: mafiaVoteResult, ...rest } = useSuspenseQuery({
    queryKey: ['jobs', 'skill', localStorage.getItem('auth')],
    queryFn: () => getMafiaVoteResult(),
    refetchInterval: 500,
    staleTime: 500,
  });
  return {
    mafiaVoteResult,
    ...rest,
  };
};

export const getRoomNightResultDead = async () => {
  return http.get<DeadResult>('/jobs/skill/result');
};

export const postVote = async (payload: VoteRequest) => {
  return http.post('/votes', payload);
};

export const getVote = async () => {
  return http.get<DeadResult>('/votes');
};

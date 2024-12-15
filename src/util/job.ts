import { Job, Player } from '../type';

export const getPlayerJob = (players: Player[], name: string): Job => {
  return players.find(el => el.name == name)?.job || null;
};
